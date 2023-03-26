import { useState } from "react";

interface expandableTextProps {
    text: string;
    characterLimit: number;
}

export default function ExpandableText({ text, characterLimit }: expandableTextProps) {

    const lessText = text.substring(0, characterLimit)
    const [expanded, setExpanded] = useState(false)
    let buttonText = expanded ? "less" : "more"

    function handleExpansion() {
        setExpanded(expanded => !expanded)
    }

    return (
        <>
            {expanded ? text : lessText + "..."}
            <button className='btn btn-success' onClick={handleExpansion}>
                Read {buttonText}
            </button>
        </>
    )
}