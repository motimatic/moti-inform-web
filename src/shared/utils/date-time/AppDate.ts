import {DateTime}  from 'luxon';

/* ------------------------------------------------
    Handle all of the tz converstion stuff with this class.
    This will allow us to set Tz on each instance of this class.
    That gives us the ability to format all DateTimes in say the Tz of the
    particlar Site.  So 3pm is 3pm in the Tz of the Site.
    Or any other strategy can be used to manage/ display DateTime in Tz.

    To display DateTime in the Site's Tz when viewing data across Sites,
    we will use a class on the EntitySelector level, which will look at the Location
    child object, get it's Tz and then use that to set the Tz for the AppDates
    in that things.
    e.g Work Orders

    WorkOrder
       * Location
          * Tz      <-- Get the Tz
       * create_date : AppDate   <-- Set the Tz

    In the Deserializer, we will go in look at the Location in the given WO,
    get its Tz and then Set all of the AppDate Tz's for that WO to the Site's Tz.

    This way all DateTimes for a given Site will be in that Site's Tz.

    create_date.toString()  <-- will convert to Sites Tz

    This is helpful for looking at things like SLAs where a WO has to be completed by
    5pm the next day (in the Sites Tz).

 */
    export class AppDate {
    
        private static defaultTimeZone: string = "America/Los_Angeles";
        private timeZone: string | null = null;
        private _dateTime: DateTime;
        private dateTimeCache: string | null = null;
    
        constructor() {
            this._dateTime = DateTime.utc();
        }
    
        get dateTime(): DateTime {
            return this._dateTime;
        }
    
        set dateTime(newValue: DateTime) {
            this._dateTime = newValue;
        }
    
        public parseDate(inputDateTime: string): void {
            // Keep as UTC.  We will convert on the way out the door.
            this._dateTime = DateTime.fromISO(inputDateTime);
        }
    
        public toString(): string {
            // Full date-time format
            return this.toFormattedString("LLLL dd, yyyy, hh:mm a"); // Custom format string
        }
    
        public toDate(): string {
            // Date format only
            return this.toFormattedString("LLL dd, yyyy"); // Date format string
        }
    
        public toTime(): string {
            // Time format only
            return this.toFormattedString("hh:mm a"); // Time format string
        }
    
        public timeAgo(): string {
            // Calculate the time difference
            const now = DateTime.now();
            
            // Use the relative method directly on DateTime
            const formattedElapsed = this._dateTime.toRelative({ base: now });
        
            return formattedElapsed || "just now"; // Return a default if `null`
        }
        
        private toFormattedString(format: string): string {
            // Check cache for performance, avoid reformatting if already done
            if (this.dateTimeCache !== null) {
                return this.dateTimeCache;
            }
    
            // Convert to the correct timezone and format
            const formattedString = this._dateTime.setZone(this.getTimeZone()).toFormat(format);
    
            // Cache the result to avoid unnecessary reformatting
            if (this.dateTimeCache === null) {
                this.dateTimeCache = formattedString;
            }
    
            return formattedString;
        }
    
        private getTimeZone(): string {
            if (this.timeZone !== null) {
                return this.timeZone;
            }
    
            return AppDate.defaultTimeZone;
        }
    }
    