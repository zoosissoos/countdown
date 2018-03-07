import React,{Component} from 'react';
import './App.css'

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount(){
    setInterval(()=> this.getTimeUntil(this.props.deadline), 1000)
  }

  //adds a zero if number displayed is less than 10
  leadingZero(num){
    return num < 10 ? '0' + num : num;
  }

  //determines time until selected date
  getTimeUntil(deadline){
    console.log('deadline', deadline)
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time)
    const sec = Math.floor((time/1000) % 60);
    const min  = Math.floor((time/(1000/60) % 60));
    const hours = Math.floor((time/(1000*60*60) % 24));
    const days = Math.floor(time/(1000*60*60*24));

    console.log('days', days, 'hours', hours, 'min', min, 'sec', sec)

    this.setState({days, hours, min, sec })
  }

  render(){
    return(
      <div>
        <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
        <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
        <div className="Clock-min">{this.leadingZero(this.state.min)} min</div>
        <div className="Clock-sec">{this.leadingZero(this.state.sec)} sec</div>
      </div>
    )
  }
}

export default Clock;