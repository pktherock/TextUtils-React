import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        if (text) {
            console.log("Uppercase was clicked!");
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase!", "success");
        }

    };


    const handleLoClick = () => {
        if (text) {
            // console.log("Lowercase was clicked!");
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase!", "success");
        }

    };

    const handleClearClick = () => {
        if (text) {
            let newText = "";
            setText(newText);
            props.showAlert("Cleared Text!", "danger");
        }

    };

    //  This function returns trimed(eats extra white spaces before & after) version of our text input!
    const handleTrimClick = () => {
        if (text) {
            let newText = text.trim();
            setText(newText);
            props.showAlert("Trimed Your Text!", "success");
        }

    };

    //  this function capitilize first latter of our whole sentence!
    const handleCapitizeFirstLatterClick = () => {
        if (text) {
            let newText = text.charAt(0).toUpperCase() + text.slice(1);
            setText(newText);
            props.showAlert("Capitalized First Latter!", "success");
        }

    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
    }


    // This fuction capitilize first latter of each word in our whole sentence!!
    const handleCapitilizeEachFirstLatterClick = () => {
        if (text) {
            const newText = text => {
                let trimText = text.trim();
                trimText = trimText.split(' ');
                let capitilizedWords = [];
                trimText.forEach(element => {
                    capitilizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
                });
                return capitilizedWords.join(' ');
            };
            setText(newText);
            props.showAlert("Capitalized Each first latter of your sentence !", "success");
        }
    };


    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="FormControl" className="form-label mx-2">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#12332d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="FormControl" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-success btn-lg mx-1 my-1 shadow" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary btn-lg mx-1 my-1 shadow" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-danger btn-lg mx-1 my-1 shadow" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary btn-lg mx-1 my-1 shadow" onClick={handleTrimClick}>Trim Text</button>
                <button disabled={text.length === 0} className="btn btn-warning btn-lg mx-1 my-1 shadow" onClick={handleCapitizeFirstLatterClick}>Capitilize First latter</button>
                <button disabled={text.length === 0} className="btn btn-primary btn-lg mx-1 my-1 shadow" onClick={handleCapitilizeEachFirstLatterClick}>Capitilize Each First latter</button>
                <button disabled={text.length === 0} className="btn btn-primary btn-lg mx-1 my-1 shadow" onClick={handleCopyClick}>Copy Text!</button>
                <button disabled={text.length === 0} className="btn btn-primary btn-lg mx-1 my-1 shadow" onClick={handleExtraSpacesClick}>Remove Extra Spaces!</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> characters!</p>
                <p><b>{(text.split(" ").filter((element) => { return element.length !== 0 }).length) === 0 ? 0 : 0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)}</b> Minute read!</p>
                <h2>Text preview</h2>
                <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <p>{text.length > 0 ? text : "Nothing to preview!"}</p>

                </div>
            </div>
        </>
    )
}
