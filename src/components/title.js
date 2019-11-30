import { React, run } from 'uebersicht';
import { header } from '../style/style';
import { timeElapsedString } from '../scripts/date';

export default class Title extends React.Component {
  render() {
    return (
      <div className={"row " + header}>
        <div id="title" className="col-md-8">
          <a href="https://yscec.yonsei.ac.kr/my/"><img src='./yscec.widget/res/logo.png' /></a>
          <span>
            {"     updated " + timeElapsedString(this.props.lastUpdateTime)}
          </span>
        </div>
      </div >
    );
  }
}