import { Alert, Box, Container, Grid, Input, LoadingOverlay, Text, TextInput, Title} from "@mantine/core";
import { Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useState } from "react";
import { IMaskInput } from 'react-imask';
import { JourneyService } from "../../../../../../shared/services/journey/journeyService";
import { Student } from "../../../../../../shared/models/student.model";
import { resourceFinderStore } from "../../../../../../state/resourceFinderStore";
import { IconArrowLeft, IconChevronDownLeft, IconChevronLeft } from "@tabler/icons-react";
import { appStore } from "../../../../../../appStore";
import { useSnapshot } from "valtio";

const phoneRegex = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const StudentForm = () => {
	useSnapshot(appStore);
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
		<div className={`student-form-container ${appStore.showStudentForm ? "show-form" : ""}`}>
			<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
			{showMessage && <Alert title="Form submitted successfully" className="mb-5" withCloseButton onClick={()=>{appStore.setShowStudentForm(false)}} closeButtonLabel="Dismiss" /> }
			<Title className="text-center roobert-medium pb-8" order={1}>Get Your Resources <br/> Sent to Your Inbox</Title>
			<div className="inner-form">
			<form onSubmit={form.onSubmit(handleSubmit)}>
				
				<Grid className="mt-5">
					<Grid.Col span={{xs:12}} >
						<TextInput
							label=""
							placeholder="First Name*"
							{...form.getInputProps('firstName')}
							required
						
						/>
					</Grid.Col>
					<Grid.Col span={{xs:12}}>
						<TextInput
							label=""
							placeholder="Last Name*"
							{...form.getInputProps('lastName')}
							required
							style={{ marginBottom: '12px' }}
						/>
					</Grid.Col>
				</Grid>
				<TextInput
					label=""
					placeholder="Email*"
					{...form.getInputProps('email')}
					required
					type="email"
					style={{ marginBottom: '12px' }}
				/>
				<Box pos={"relative"}>
					<Input
						error="both below the input"
						component={IMaskInput}
						mask="(000) 000-00-00"
						placeholder="Phone*"
						{...form.getInputProps('phone')}
						required
						style={{ marginBottom: '10px' }}
						/>
					<Box pos={"absolute"} top={60}>
						{<span className="text-red-500 text-xs">{form.getInputProps('phone').error}</span>}
					</Box>
				</Box>
			</form>
			<Container className="flex justify-end mt-5">
					<button type="submit" className="custom-dark-button">SUBMIT</button>
			</Container>
			<button className="custom-outline-button back-button no-border text-gray-400" style={{border: "none"}} onClick={()=>{appStore.setShowStudentForm(false)}}>
				<IconChevronLeft size={25} />
					BACK
				</button>
			</div>
		</div>
  	);
};

export default StudentForm;
