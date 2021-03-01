import React, { Component } from 'react'
import styled from 'styled-components'
import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { colorCodes } from '../constant/color';
import { withRouter } from 'react-router-dom';

const { WHITE, BLUE_1, GREY, RED } = colorCodes

const Container = styled.div`
    padding: 0px 20px;
    margin-bottom: 150px;
    display: flex;
    padding-top: 50px;
    font-family: "Open Sans", sans-serif;
    @media(max-width:1000px){
        display: unset;
    }
    .field-name{
      display: flex;
      padding-bottom: 30px;
      flex-direction: column;
    }
    .input-field {
      height: 45px;
      font-size: 16px;
      border-radius: 4px;
      padding-left: 15px;
      border: 1px solid #ced4da;
      outline-color: ${BLUE_1};
      :focus {
        color: ${GREY};
        background-color: ${WHITE};
        border-color: ${BLUE_1};
        outline: 0;
        }
      :hover {
        box-shadow: 0 5px 11px rgba(33,33,33,.2);
      }
    }
`;

const Location = styled.div`
    display: flex;
    :hover {
        cursor: pointer;
        .icon-class { 
            color: ${WHITE};
            background: ${BLUE_1};
            text-decoration: none;
        }
    }
`;

const Icon = styled.div`
    font-size: 20px;
    color: ${BLUE_1};
    min-width: 44px;
    height: 46px;
    background: #dff3fc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    @media(max-width:1000px){
        width: 44px;
    }
`;

const LocationDiv = styled.div`
    color: ${GREY};
    font-size: 15px;
    line-height: 20px;
    padding-left: 20px;
    padding-bottom: 30px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ZipCode = styled.div`
  padding-top: 5px;
`;

const EmailDiv = styled.div`
    display: flex;
    padding-bottom: 30px;
    :hover {
        cursor: pointer;
        .icon-class { 
          color: ${WHITE};
          background: ${BLUE_1};
          text-decoration: none;
        }
    }
`;

const CallDiv = styled.div`
  display: flex;
  padding-bottom: 30px;
  :hover {
    cursor: pointer;
    .icon-class { 
      color: ${WHITE};
      background: ${BLUE_1};
      text-decoration: none;
    }
  }
`;

const ParantDiv = styled.div`
    color: ${GREY};
    font-size: 15px;
    padding-left: 20px;
`;

const MyInformations = styled.div`
    padding: 30px;
    width: 41%;
    @media(max-width:1000px){
      width: 70%;
      margin: 25px auto;
    }
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
`;

const FormDiv = styled.div`
    width: 59%;
    padding: 30px;
    margin-left: 20px;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
    form {
      padding: 0px 20px;
      @media(max-width: 1000px){
        padding: unset;
    }
    }
    label {
      color: ${GREY};
      padding-bottom: 15px;
    }
    @media(max-width: 1000px){
      width: 70%;
      margin: 25px auto;
  }
  .textarea-field {
    font-size: 16px;
    min-height: 150px;
    border-radius: 4px;
    padding: 20px 0px 0px 15px;
    border: 1px solid #ced4da;
    font-family: "Open Sans", sans-serif;
    :focus {
      color: ${GREY};
      border-color: ${BLUE_1};
      outline: 0;
    }
    :hover {
      box-shadow: 0 5px 11px rgba(33,33,33,.2);
    }
  }
  .
`;

const SubmitButton = styled.button`
   ${props => props.disabled ? `
    cursor: not-allowed;
    opacity: 0.7; ` : `
  cursor: pointer;
  :hover {
    background: ${BLUE_1};
  }
  `};
`;

const ErrorClass = styled.div`
  color: ${RED};
  margin-top: 4px;
  margin-left: 5px;
  font-size: 14px;
`;

export class MyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      error: {},
      textarea: ''
    }
  }


  validate = target => {
    let id = target.id;
    let value = target.value;
    let type = target.type;
    let name = target.name;
    let error = {};

    if (type === "text" || type === "textarea") {
      if (validator.isEmpty(value)) {
        let errorText = `${name} is Required`;
        if (error[id])
          error[id].push(errorText);
        else
          error[id] = [errorText]
      }
    } else if (type === "email") {
      if (validator.isEmpty(value)) {
        let errorText = `${name} is Required`;
        if (error[id])
          error[id].push(errorText);
        else
          error[id] = [errorText];
      }
      if (!validator.isEmail(value)) {
        let errorText = "Please Enter Valid Email";
        if (error[id])
          error[id].push(errorText);
        else
          error[id] = [errorText]
      }
    }

    let newError = Object.assign({}, this.state.error);
    if (error[id]) newError[id] = error[id];
    else delete newError[id];
    this.setState(prevState => {
      return {
        ...prevState,
        error: newError
      }
    });
  }

  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  handleOnBlur = e => this.validate(e.target);

  handleOnFocus = event =>  delete this.state.error[event.target.id]

  submitData = (e) => {
    e.preventDefault()
    toast.success("Send Message Successfully!", {
      onClose: () => this.props.history.push("/")
    });
  }

  render() {
    const { firstname, lastname, email, textarea, error } = this.state
    return (
      <Container>
        <MyInformations>
          <Location>
            <Icon icon={true} className="icon-class"><i className="fas fa-map-marker-alt"></i></Icon>
            <LocationDiv>
              <Title>Location</Title>
              <div>H No 23 Block No A Jindal Aadarsh Colony Hisar</div>
              <ZipCode>125001</ZipCode>
            </LocationDiv>
          </Location>
          <EmailDiv>
            <Icon className="icon-class"><i className="fas fa-envelope"></i></Icon>
            <ParantDiv>
              <Title>Email</Title>
              <div>mdrizwan@gmail.com</div>
            </ParantDiv>
          </EmailDiv>
          <CallDiv>
            <Icon className="icon-class"><i className="fas fa-phone-alt"></i></Icon>
            <ParantDiv>
              <Title>Call</Title>
              <div>+918383944926</div>
            </ParantDiv>
          </CallDiv>
          <iframe
            src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Iframe Example"
            frameBorder="0" style={{ border: "0", width: "100%", height: "290px" }} allowFullScreen></iframe>
        </MyInformations>
        <FormDiv>
          <form>
            <div className="field-name">
              <label> First Name</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                name=" First name"
                className="input-field"
                placeholder="First Name"
                onChange={this.handleChange}
                onBlur={e => this.handleOnBlur(e)}
                onFocus={e => this.handleOnFocus(e)}
              />
              <ErrorClass>
                {error["firstname"] ? error["firstname"][0] : ""}
              </ErrorClass>
            </div>
            <div className="field-name">
              <label> Last Name</label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                name=" Last name"
                className="input-field"
                placeholder="Last Name"
                onChange={this.handleChange}
                onBlur={e => this.handleOnBlur(e)}
                onFocus={e => this.handleOnFocus(e)}
              />
              <ErrorClass>
                {error["lastname"] ? error["lastname"][0] : ""}
              </ErrorClass>
            </div>
            <div className="field-name">
              <label> Your Email</label>
              <input
                id="email"
                type="email"
                name="Email"
                value={email}
                className="input-field"
                placeholder="@gmail.com"
                onChange={this.handleChange}
                onBlur={e => this.handleOnBlur(e)}
                onFocus={e => this.handleOnFocus(e)}
              />
              <ErrorClass>
                {error["email"] ? error["email"][0] : ""}
              </ErrorClass>
            </div>
            <div className="field-name">
              <label> Enter Message</label>
              <textarea
                name="Text"
                id="textarea"
                type="textarea"
                value={textarea}
                className="textarea-field"
                onChange={this.handleChange}
                placeholder="Enter Your Message"
                onBlur={e => this.handleOnBlur(e)}
                onFocus={e => this.handleOnFocus(e)}
              />
              <ErrorClass>
                {error["textarea"] ? error["textarea"][0] : ""}
              </ErrorClass>
            </div>
            <SubmitButton disabled={!firstname || !lastname || !email || !textarea} type="submit" onClick={this.submitData} className="common-button" value="Send Message">
              Send Message
            </SubmitButton>
            <ToastContainer autoClose={4000} />
          </form>
        </FormDiv>
      </Container >
    )
  }
}
export default withRouter(MyInformation)