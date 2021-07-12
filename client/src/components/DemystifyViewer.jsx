import React from 'react';

import { Container} from 'react-bootstrap';
import ManualPuzzleStepper from './ManualPuzzleStepper';
import AutoPuzzleStepper from './AutoPuzzleStepper';
import MainMenu from './MainMenu';

/**
 * Currently the main content component for this application.
 */
class DemystifyViewer extends React.Component {
  state = {
    inputObject: [],
    type: "",
    params: {},
    error: false,
    mode: "default"
  }
  
  // Load the steps, the type of puzzle, and the params (configuration) of the puzzle
  setJSONInput(obj, mode) {
    this.setState({ inputObject: obj.steps, type: obj.name, params: obj.params, mode: mode},
      () => !(this.state.inputObject && this.state.type && this.state.params)  
      && this.setError()) 
  }

  // Avoid invalid JSON
  setError() {
    this.setState({error: true});
  }

  conponentDidUpdate(prevProps, prevState) {
    if(prevState.error) this.setState({error: false});
  }

  render = () => {
    return (
      <Container fluid style={{textAlign: "center"}}>
        
        {/*If the puzzle has not been correctly loaded, display the main menu*/
          (this.state.inputObject.length === 0 || this.state.error) ?
            <MainMenu setInput={this.setJSONInput.bind(this)} />
          :
          /*Otherwise display the main puzzle visualiser*/
          (this.state.mode === "default" ? 
            <AutoPuzzleStepper 
              inputObject={this.state.inputObject}
              type={this.state.type}
              params={this.state.params} /> :
            <ManualPuzzleStepper
              inputObject={this.state.inputObject}
              type={this.state.type}
              params={this.state.params} />)
        }
      </Container>
    )
  }
}

export default DemystifyViewer
