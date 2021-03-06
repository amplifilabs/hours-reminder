import { handlerPath } from '@libs/handlesResolver';

export default {
  name: '${self:service}-${opt:stage, "dev"}-hoursReminder',
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      schedule: {
        name: '${self:service}-${opt:stage, "dev"}-schedule-hoursReminder',
        description: 'Sends emails to people to remind them to log hours',
        rate: ['cron(0 12 L * ? *)'],
        enabled: true
      }
    }
  ]
}
