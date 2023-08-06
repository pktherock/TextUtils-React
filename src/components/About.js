import React from 'react';

export default function About(props) {
  // const [myStyle, setMyStyle] = useState(
  //     {
  //         color: 'black',
  //         backgroundColor: 'white'
  //     }
  // )

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  };

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //     if (myStyle.backgroundColor === 'white') {
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black'
  //         })
  //         setBtnText("Enable Light Mode");
  //     } else {
  //         setMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //         setBtnText("Enable Dark Mode");
  //     }
  // }

  return (
    <div
      className="container my-3"
      style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
    >
      <h1>About Us!</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text1</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is free character couter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils the number of word and characters. Thus it is suitable
              for writing text with text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Free to useBrowser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such chrome,
              Firefox, Internet Explorer, Safari, Opera. It suits to count
              characters in facebook, blog, books, excel document, pdf document,
              essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
