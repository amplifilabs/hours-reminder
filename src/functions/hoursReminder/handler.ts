import { middyfy } from '@libs/lambda';

const hoursReminder = async () => {
  const region = process.env.SLS_REGION;
  
  const serviceStagePrefix = `${process.env.SLS_SERVICE}-${process.env.SLS_STAGE}-`;

  /* YOUR CODE GOES HERE */

  console.log('\n');

  return;
}

export const main = middyfy(hoursReminder);
