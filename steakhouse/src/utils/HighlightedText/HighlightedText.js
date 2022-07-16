import * as s from './HighlightedText.styled';

const HighlightedText = (props) => {
    return <s.HighlightedSpan background={props.background}>{props.text}</s.HighlightedSpan>
}

export default HighlightedText;