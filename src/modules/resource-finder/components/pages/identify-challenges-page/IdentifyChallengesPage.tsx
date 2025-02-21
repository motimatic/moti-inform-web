import {Button} from "@mantine/core";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../../state/resourceFinderStore.ts";

const IdentifyChallengesPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);

    return (
        <>
            <label>{snapshot.context.getCurrentPage()?.title || "No summary available"}</label>
            <h4>{snapshot.context.getCurrentPage()?.prompt || "No summary available"}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Financial</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Academic</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Wellness</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Relationships</Button>
                </div>
                <div style={{padding: '10px'}}>
                    <Button variant="filled">Scheduling</Button>
                </div>
            </div>
        </>
    );
};

export default IdentifyChallengesPage;
