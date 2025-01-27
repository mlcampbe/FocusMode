export const command = "/usr/bin/osascript -l JavaScript focusmode/getfocus.javascript";

export const refreshFrequency = 10000;   // 3600000 = 10 sec

export const initialState = { output: 'Checking Focus Mode...' };

export const className = `
  pointer-events: none;
  top: 15px;
  right: 50px;

  .focus {
    pointer-events: none;
    color: #fff;
    font-size: 20px;
  }
`;

export const render = ({output, error}) => {
  if (output.match("No focus")) {
      return("");
  } else {
    return(
      <div>
        <img className="focus" height="100" src="focusmode/moon.png" />
      </div>
    )
  }
}
