import styles from "./feedbackOptons.module.css"


const FeedbackOptions  = ({onLeaveFeedback,options})=>{
  const elements = Object.keys(options).map(option => <li key={option}><button style={{ backgroundColor:getColor()}} className={styles.button}  onClick={()=>onLeaveFeedback(option)}>{option}</button></li>)
  return (
    <div>
    <h1 className={styles.heading}>Оставьте ваш отзыв</h1>
    <ul className={styles.buttonsList}>
    {elements}</ul>
    </div>
    
  );}
  

export default FeedbackOptions 
  
function getColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
      }
