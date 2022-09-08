import React from "react";
import { ListGroup } from "react-bootstrap";

/**
 * A single explanation/reason that can be highlighted on mouse over.
 */
class Explanation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: this.props.highlighted,
    };
    
  }

  highlight() {
    this.setState({ highlighted: true });
    this.props.highlight();
  }

  deHighlight() {
    //...unhighlight? dishighlight?
    this.setState({ highlighted: false });
    this.props.highlight();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.highlighted !== this.props.highlighted) {
      this.setState({ highlighted: this.props.highlighted });
    }
  }

  

  render() {
    const itemStyle = this.state.highlighted
      ? { backgroundColor: "cornsilk" }
      : null;

    const { decision, reason, index } = this.props;

    return (
      <ListGroup.Item
        style={itemStyle}
        key={index}
        onMouseEnter={this.highlight.bind(this)}
        onMouseLeave={this.deHighlight.bind(this)}
      >
        {this.props.getMeaningfulDecision(decision)}
        <br />
        {reason}
      </ListGroup.Item>
    );
  }
}

export default Explanation;
