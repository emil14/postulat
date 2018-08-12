import Snapdragon from 'snapdragon';

type NodeType = {
  type: any,
  val: any
}
type Handler = (this: typeof Snapdragon) => NodeType | void

const { parser }: typeof Snapdragon = new Snapdragon();

const ast = parser
  .set('var', function(): Handler {
    const matching = this.match(/^\w+/);

    if (!matching) {
      return;
    }

    const setPosition = this.position();
    const [ variable ] = matching;

    return setPosition({ isNode: false, val:variable });
  })
  .parse('x = 1 + 1');

