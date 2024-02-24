import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

interface CodeBlockProps {
  value: string;
}

class CodeBlock extends React.Component<CodeBlockProps> {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }

  render() {
    const { value } = this.props;
    return (
      <pre>
        <code>{value}</code>
      </pre>
    );
  }
}

export default CodeBlock;
