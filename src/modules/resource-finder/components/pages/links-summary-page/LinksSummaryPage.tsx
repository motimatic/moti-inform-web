import { resourceFinderStore } from "../../../../../state/resourceFinderStore.ts";
import LinksSummaryRow from "./components/LinksSummaryRow.tsx";
import {useSnapshot} from "valtio/index";


const LinksSummaryPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);

    return (
        <>
            <label>{snapshot.context.getCurrentPage()?.title || "No summary available"}</label>
            <h4>{snapshot.context.getCurrentPage()?.prompt || "No summary available"}</h4>
            <LinksSummaryRow/>
            <LinksSummaryRow/>
            <LinksSummaryRow/>
        </>
    );
};

export default LinksSummaryPage;
