import { formatDistanceToNowStrict } from "date-fns";
import { toZonedTime } from 'date-fns-tz';

export function timeAgo(utcDateTimeString: string): string {

    if (!utcDateTimeString || utcDateTimeString.trim().length === 0) {
        // return some default value or throw an error
        return 'now';
    }

    // Get browser's timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Convert UTC datetime string to browser's timezone
    const dateInBrowserTimezone = toZonedTime(new Date(utcDateTimeString), timezone);

    // Format to time ago
    const timeAgo = formatDistanceToNowStrict(dateInBrowserTimezone, { addSuffix: true });

    return timeAgo;
}
