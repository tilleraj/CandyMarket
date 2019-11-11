import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from 'reactstrap';
import './CandyRowNew.scss';
import candyData from '../../data/candyData';

const defaultCandy = {
  id: '',
  name: '',
  manufacturer: '',
  category: '',
};

class CandyRowNew extends React.Component {

  state = {
    newCandy: defaultCandy,
  }

  formFieldStringState = (name, e) => {
    const tempCandy = { ...this.state.newCandy };
    tempCandy[name] = e.target.value;
    this.setState({ newCandy: tempCandy });
  }

  nameChange = e => this.formFieldStringState('name', e);

  manufacturerChange = e => this.formFieldStringState('manufacturer', e);

  categoryChange = e => this.formFieldStringState('category', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newCandy };
    candyData.postCandy(saveMe)
      .then(this.props.callBack())
      .catch(error => console.error('unable to save candy', error));
  }

  eatCandy(id) {
    console.log(`Attempt to eat candy with id ${id}`);
  }

  render() {
    const { newCandy } = this.state;
    return (
      <Form onSubmit={this.formSubmit}>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                placeholder="ex: Snickers"
                value={newCandy.name}
                onChange={this.nameChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="manufacturer">Manufacturer</Label>
              <Input
                id="manufacturer"
                placeholder="ex: Mars"
                value={newCandy.manufacturer}
                onChange={this.manufacturerChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                id="category"
                placeholder="ex: Chocolate"
                value={newCandy.category}
                onChange={this.categoryChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="submit">Add Candy</Label>
              <Button id="submit" type="submit" color="primary" className="ml-auto mr-auto d-block">Submit</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CandyRowNew;
