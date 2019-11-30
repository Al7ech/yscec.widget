import { run, css } from 'uebersicht';
import App from './src/app';

export const className = css`
  top:10%;
  width: 50%;
  padding: 0 0 0 20px;
`

export const initialState = {
  subjects: [],
  lastUpdateTime: 'null',
  updateText: 'update!',
  updating: false
}

export const init = (dispatch) => {
  run('cat yscec.widget/noticedata.json')
    .then((output) => {
      let outputJSON = JSON.parse(output);
      outputJSON.subjects = outputJSON.subjects.map((subject) => {
        subject.notices = subject.notices.map((notice) => {
          notice.time = new Date(notice.time);
          return notice;
        })
        return subject;
      })
      outputJSON.lastUpdateTime = new Date(outputJSON.lastUpdateTime);
      dispatch({
        type: 'OUTPUT_UPDATED',
        output: outputJSON
      });
    })


  setInterval(function () {
    dispatch({
      type: 'TIMESTRING_UPDATE'
    })
  }, 10 * 1000); // 60 * 1000 milsec
}

export const refreshFrequency = 1000;

export const command = (dispatch) =>
  run('cat yscec.widget/noticedata.json')
    .then((output) => {
      let outputJSON = JSON.parse(output);
      outputJSON.subjects = outputJSON.subjects.map((subject) => {
        subject.notices = subject.notices.map((notice) => {
          notice.time = new Date(notice.time);
          return notice;
        })
        return subject;
      })
      outputJSON.lastUpdateTime = new Date(outputJSON.lastUpdateTime);
      dispatch({
        type: 'OUTPUT_UPDATED',
        output: outputJSON
      });
    })

export const render = (state, dispatch) => {
  return (< App subjects={
    state.subjects
  }
    lastUpdateTime={
      state.lastUpdateTime
    }
  />
  );
}

export const updateState = (event, previousState) => {
  switch (event.type) {
    case 'OUTPUT_UPDATED':
      previousState = event.output;
      break;
    case 'TIMESTRING_UPDATE':
      break;
  }
  return previousState;
}