import { Button } from '@mantine/core';
import {useSnapshot} from "valtio/index";
import {resourceFinderStore} from "../../../state/resourceFinderStore.ts";


const JourneyConfirmationPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);

    return (
        <>
            <label>{snapshot.context.getCurrentPage()?.title || "No summary available"}</label>
            <h4>{snapshot.context.getCurrentPage()?.prompt || "No summary available"}</h4>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Returning to School</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">First Time Student</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Applying</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Financial Preparation</Button>
                </div>
            </div>
        </>
    );
};

export default JourneyConfirmationPage;
