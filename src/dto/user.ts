import { Rule, RuleType } from '@midwayjs/decorator';

export class CreateUserInput {
  @Rule(RuleType.string().required().min(6).max(16))
  account: string;

  @Rule(RuleType.string().required().min(6).max(16))
  password: string;
}
