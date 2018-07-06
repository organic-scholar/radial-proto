
import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'describe the command here'

  static examples = [
  ]

  static flags = {};

  static args = [{name: 'file'}, {name: 'path'}]

  async run()
  {
    const parsed = this.parse(Create);
  }
}
