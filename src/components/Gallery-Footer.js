import React, { Component } from 'react'

import { Footer, Container, Level, Button, Form } from 'react-bulma-components/full'

class GalleryFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exhibition: 'new',
      newExhibition: ''
    }
  }
  updateExhibition(event) {
    const nextExhibition = event.target.value
    this.setState({
      exhibition: nextExhibition
    })
  }
  updateNewExhibition(event) {
    const newExhibitionValue = event.target.value
    this.setState({
      newExhibition: newExhibitionValue
    })
  }
  render() {
    return (
      <Footer id='footer'>
        <Container>
          <Level>
            <Level.Side align='left'>
              <Level.Item>
                <Button outlined
                        color='black'
                        type='button'
                        className='font'
                        onClick={() => this.props.moveExhibition(this.state.exhibition)}>
                  Move to
                </Button>
              </Level.Item>
              <Level.Item>
                <Form.Select value={this.state.exhibition}
                            onChange={(event) => this.updateExhibition(event)}
                            className='font is-black'>
                  <option key="0"
                          value="new">
                    New
                  </option>
                  {this.props.exhibitions.map((exhibition, index) => {
                    return (
                      <option key={index + 1}
                              value={exhibition.title}>
                        {exhibition.title}
                      </option>
                    )
                  })}
                </Form.Select>
              </Level.Item>
              <Level.Item>
                <Form.Input value={this.state.newExhibition}
                            onChange={(event) => this.updateNewExhibition(event)}
                            className='font is-black'>
                </Form.Input>
              </Level.Item>
              <Level.Item>
                <Button outlined
                        color='black'
                        type='button'
                        className='font'
                        onClick={() => this.props.addExhibition(this.state.newExhibition)}>
                  New
                </Button>
              </Level.Item>
            </Level.Side>
            <Level.Side align='right'>
              <Level.Item>
                <Button outlined
                        color='black'
                        type='button'
                        className='font'
                        onClick={() => this.props.removeImage()}>
                  Remove
                </Button>
              </Level.Item>
            </Level.Side>
          </Level>
        </Container>
      </Footer>
    )
  }
}

export default GalleryFooter