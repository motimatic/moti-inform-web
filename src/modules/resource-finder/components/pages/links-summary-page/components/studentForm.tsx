import { Alert, Box, Container, Grid, Input, LoadingOverlay, Text, TextInput} from "@mantine/core";
import { Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useState } from "react";
import { IMaskInput } from 'react-imask';
import { JourneyService } from "../../../../../../shared/services/journey/journeyService";
import { Student } from "../../../../../../shared/models/student.model";
import { resourceFinderStore } from "../../../../../../state/resourceFinderStore";
interface StudentFormProps {
	setShowForm: any
}

const phoneRegex = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const StudentForm: React.FC<StudentFormProps> = ({setShowForm}) => {
	const [isLoading, setIsloading] = useState<boolean>(false);
	const [showMessage, setShowMessage] = useState<boolean>(false);
	const form = useForm({
    	initialValues: {
      		firstName: '',
      		lastName: '',
      		email: '',
      		phone: '',
    	},
    	validate: {
      		firstName: (value: any) => (value.length === 0 ? 'First name is required' : null),
      		lastName: (value: any) => (value.length === 0 ? 'Last name is required' : null),
      		email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
      		phone: (value: any) => {
				if (value.length === 0) return 'Phone number is required';
				if (!phoneRegex.test(value)) {
					return 'Invalid phone number format';
				}
				return null;
			},
    	},
  });

	const handleSubmit = (values: any) => {
		// Handle form submission
		setIsloading(true);
		try{
			const service = new JourneyService();
			const student = new Student();
			student.id = resourceFinderStore.context.person_id;
			student.first_name = values.firstName;
			student.last_name = values.lastName;
			student.phone = `+${values.phone.replace(/[^\d]/g, '')}`;
			student.email = values.email;
			service.sendResources(student);
		} catch(error){
			console.log("an error has ocurred ", error)
		} finally {
			setIsloading(false);
			setShowMessage(true);
		}

	};

	return (
		<Box pos="relative">
			<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
			{showMessage && <Alert title="Form submitted successfully" className="mb-5" withCloseButton onClick={()=>{setShowForm(false)}} closeButtonLabel="Dismiss" /> }
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Text size="lg">Please fill out the form below to receive your matching results in your email.</Text>
				<Grid className="mt-5">
					<Grid.Col span={{xs:12, md:6}} >
						<TextInput
							label="First Name"
							placeholder="Enter your first name"
							{...form.getInputProps('firstName')}
							required
							style={{ marginBottom: '10px' }}
						/>
					</Grid.Col>
					<Grid.Col span={{xs:12, md:6}}>
						<TextInput
							label="Last Name"
							placeholder="Enter your last name"
							{...form.getInputProps('lastName')}
							required
							style={{ marginBottom: '10px' }}
						/>
					</Grid.Col>
				</Grid>
				<TextInput
					label="Email"
					placeholder="Enter your email"
					{...form.getInputProps('email')}
					required
					type="email"
					style={{ marginBottom: '10px' }}
				/>
				<Box pos={"relative"}>
					<Input.Label required>Phone</Input.Label>
					<Input
						error="both below the input"
						component={IMaskInput}
						mask="(000) 000-00-00"
						placeholder="Enter your phone"
						{...form.getInputProps('phone')}
						required
						style={{ marginBottom: '10px' }}
						/>
					<Box pos={"absolute"} top={60}>
						{<span className="text-red-500 text-xs">{form.getInputProps('phone').error}</span>}
					</Box>
				</Box>

				<Container className="flex justify-end mt-15">
					<Button variant="outline" onClick={()=>setShowForm(false)} className="me-3">Go back</Button>
					<Button type="submit">Send</Button>
				</Container>
			</form>
		</Box>
  	);
};

export default StudentForm;
