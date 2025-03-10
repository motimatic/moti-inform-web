import { Alert, Box, Container, Grid, LoadingOverlay, Text, TextInput} from "@mantine/core";
import { Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useState } from "react";

interface StudentFormProps {
	setShowForm: any
}
const StudentForm: React.FC<StudentFormProps> = ({setShowForm}) => {
	const [isLoading, setIsloading] = useState<boolean>(false);
	const [showMessage, setShowMessage] = useState<boolean>(false);
	const form = useForm({
    	initialValues: {
      		firstName: 'John',
      		lastName: 'Doe',
      		email: 'mail@example.com',
      		phone: '1020304050',
    	},
    	validate: {
      		firstName: (value: any) => (value.length === 0 ? 'First name is required' : null),
      		lastName: (value: any) => (value.length === 0 ? 'Last name is required' : null),
      		email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
      		phone: (value: any) => (value.length === 0 ? 'Phone number is required' : null),
    	},
  });

	const handleSubmit = (values: any) => {
		// Handle form submission
		console.log(values);
		setIsloading(true);
		// Simulation of the request with a 5 second delay
		console.log("Request initiated...");
		setTimeout(() => {
			console.log("Request completed after 5 seconds.");
			setIsloading(false);
			setShowMessage(true);
			setTimeout(()=>{
				setShowMessage(false);
				setShowForm(false);
			},35000)
		}, 3500);

	};

	return (
		<Box pos="relative">
			<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
			{showMessage && <Alert title="Form submitted successfully" className="mb-5" withCloseButton closeButtonLabel="Dismiss" /> }
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Text size="lg">Please fill out the form below to receive your matching results in your email.</Text>
				<Grid className="mt-5">
					<Grid.Col span={{xs:12, md:6}} >
						<TextInput
							label="First Name"
							placeholder="Enter your first name"
							{...form.getInputProps('firstName')}
							required
							value={"John"}
							style={{ marginBottom: '10px' }}
						/>
					</Grid.Col>
					<Grid.Col span={{xs:12, md:6}}>
						<TextInput
							label="Last Name"
							value={"Doe"}
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
					value={"mail@example.com"}
					type="email"
					style={{ marginBottom: '10px' }}
				/>
				<TextInput
					label="Phone"
					value={"1020304050"}
					placeholder="Enter your phone number"
					{...form.getInputProps('phone')}
					required
					style={{ marginBottom: '20px' }}
				/>
				<Container className="flex justify-end">
					<Button variant="outline" onClick={()=>setShowForm(false)} className="me-3">Go back</Button>
					<Button type="submit">Send</Button>
				</Container>
			</form>
		</Box>
  	);
};

export default StudentForm;
