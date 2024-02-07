// Random number generator
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

//Object that stores array to store the message components
const wealthMessages = {
    rightNowMessage: ['Living paycheck to paycheck', 'Struggling to make ends meet', 'In debt and feeling overwhelmed', 'Saving diligently for the future', 'Enjoying financial stability', 'Investing wisely for growth', 'Accumulating wealth steadily', 'Living comfortably off your assets', 'Building multiple streams of income', 'Financially independent and secure'],
    ifMessage: ['Create a budget and stick to it', 'Invest in your education or skill development', 'Start a side hustle or passive income stream', 'Cut unnecessary expenses and save more', 'Diversify your investment portfolio', 'Network and seek mentorship from successful individuals', 'Continuously educate yourself about personal finance', 'Set specific financial goals and track your progress', 'Take calculated risks in your investments', 'Volunteer or donate to causes you believe in, giving back to your community'],
    thenMessage: ['On track to financial freedom', 'Able to handle unexpected expenses with ease', 'Building wealth for generations to come', 'Living a life of abundance and fulfillment', 'Confident in your financial future', 'Ready to retire comfortably and enjoy life', 'Inspiring others with your success story', 'Able to pursue your passions without financial constraints', 'Making a positive impact on the world through your resources', 'Living the life you have always dreamed of, free from financial worries'],
}


//array to store personal wealth prediction
let wealthPredictor = [];

//iterate over the object
// Iterate over the object
for(let prop in wealthMessages) {
    let optionIdx = generateRandomNumber(wealthMessages[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'rightNowMessage':
        wealthPredictor.push(`Right now you are "${wealthMessages[prop][optionIdx]}".`)
        break
      case 'ifMessage':
        wealthPredictor.push(`If you "${wealthMessages[prop][optionIdx]}", `)
        break
      case 'thenMessage':
        wealthPredictor.push(`You will be "${wealthMessages[prop][optionIdx]}".`)
        break
      default:
        wealthPredictor.push('There is not enough info.')
    }
  }

//Display message
console.log(wealthPredictor);

