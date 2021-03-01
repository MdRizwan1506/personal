import React, { Component } from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constant/color';

const { BLUE_1 } = colorCodes

const Container = styled.div`
    border-bottom: 2px solid ${BLUE_1};
    @media (max-width: 400px) {
      font-size: 20px;
    }
`;

class Typing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      wordIndex: 0,
      isDeleting: false,
      isWaiting: false,
    }
  }

  componentDidMount() {
    window.addEventListener('load', this.type())
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.type())
  }

  type = () => {
    const { wordIndex, isDeleting, text } = this.state
    const currentIndex = wordIndex % this.props.words.length
    const currentWord = this.props.words[currentIndex]

    this.setState({ isWaiting: false })
    if (isDeleting) {
      this.setState({
        text: currentWord.substring(0, text.length - 1)
      })
    } else {
      this.setState({
        text: currentWord.substring(0, text.length + 1)
      })
    }

    let typeSpeed = 200

    if (this.isDeleting) {
      typeSpeed /= 2
    }

    if (!isDeleting && (text === currentWord)) {
      typeSpeed = (Math.random() * Math.floor(3)) * 1000

      this.setState({
        isWaiting: true,
        isDeleting: true,
      })
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        wordIndex: this.state.wordIndex + 1
      })
      typeSpeed = 400
    }
    setTimeout(() => this.type(), typeSpeed)
  }

  render() {
    return (
      <Container>{this.state.text}</Container>
    )
  }
}

export default Typing
