import { Button } from '@mantine/core';
import {useSnapshot} from "valtio/index";
import { resourceFinderStore } from '../../../../../state/resourceFinderStore';

const JourneyConfirmationPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);

    return (
        <>
            <label>{snapshot.context.getCurrentPage()?.title || "No summary available"}</label>
            <h4>{snapshot.context.getCurrentPage()?.prompt || "No summary available"}</h4>
            <div className='flex flex-wrap'>
                    <Button className='mx-2 my-2' variant="filled">Returning to School</Button>
                    <Button className='mx-2 my-2' variant="filled">First Time Student</Button>
                    <Button className='mx-2 my-2' variant="filled">Applying</Button>
                    <Button className='mx-2 my-2'variant="filled">Financial Preparation</Button>
            </div>
        </>
    );
};

export default JourneyConfirmationPage;
