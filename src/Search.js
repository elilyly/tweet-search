import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

export default class Search extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      content: ''
    }
  }

  submit(e){
    e.preventDefault()
    this.props.callback(this.state.content)
  }

  handleInputChange(e){
    this.setState({
      content: e.target.value
    })
    console.log("search input updated: ", this.state.content)
  }

  render(){
    return(
    <div className='col-md-4'>
      <Form onSubmit={this.submit}>
        <Input type="test" value={this.state.content} onChange={this.handleInputChange} placeholder="Enter Search Term" /><br/><br/>
        <Button>search!</Button>
      </Form>
    </div>
    )
  }
}
