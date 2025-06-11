import {BasicDetails} from "@/_module/integeration/BasicDetails";
import { elevenLabsAPIs } from "@/_module/integeration/ElevenLabsAPIs";
import { uploadFiles } from "@/_module/integeration/UploadFiles";
// import { FileUp, Home, Mic } from "lucide-react";
import basic from "@/../public/images/basic_details.png"
import mic from "@/../public/images/mic_apis.png"
import uploadFile from "@/../public/images/uploadfiles.png"
import Workflow from "@/../public/images/location.png"
import ComplexIntegration from "@/../public/images/complex_integeration.png"
import Visibility from "@/../public/images/visibility.png"
import SecurityRisk from "@/../public/images/security_risk.png"

export const agentSteps = [
    {
        id: 0,
        type: "basic",
        component: BasicDetails
    },
    {
        id: 1,
        type: "upload",
        component: uploadFiles
    },
    {
        id: 2,
        type: "apis",
        component: elevenLabsAPIs
    }
]

export const agentStepType = [
    {
        id: 0,
        type: "basic",
        text: "Basic Details",
        icon: basic
    },
    {
        id: 1,
        type: "upload",
        text: "Upload Files",
        icon: uploadFile
    },
    {
        id: 2,
        type: "apis",
        text: "Voice APIs",
        icon: mic
    },
]

export const features = [
    {
        icon: Workflow,
        title: "Managing Complex Workflows",
        description: "Handling numerous AI agents without centralized management can lead to inefficiencies and missed opportunities."
    },
    {
        icon: ComplexIntegration,
        title: "Complex integration challenges",
        description: "Connecting AI workflows across WhatsApp, Telegram, CRMs, and APIs requires seamless, real-time synchronization."
    },
    {
        icon: Visibility,
        title: "Lack of visibility & optimization",
        description: "Without insights, tracking agent performance and refining automation strategies becomes guesswork."
    },
    {
        icon: SecurityRisk,
        title: "Security risks & compliance gaps",
        description: "Inadequate safeguards can lead to data breaches, operational failures, and regulatory non-compliance."
    },
]