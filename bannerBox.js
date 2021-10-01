class Banner {
  constructor(message, width = message.length) {
    this.message = message;
    this.width = width;
  }

  displayBanner() {
    console.log([
      this.horizontalRule(), this.emptyLine(), this.messageLine(), 
      this.emptyLine(), this.horizontalRule()].join("\n")
    );
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.width)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.width)} |`;
  }

  messageLine() {
    return this.wordWrap()
      .split('\n')
      .map(line => {
        let leftPad = `${' '.repeat((this.width - line.length) / 2)}`;
        return `| ${(leftPad + line).padEnd(this.width, ' ')} |`;
      })
      .join('\n');
  }

  wordWrap() {
    let wrapped = '';
    let idx1 = 0;
    let idx2 = this.width - 1;

    while (idx1 < this.message.length - this.width) {
      let nextSpaceIndex = 
        this.message.substring(idx1, idx1 + this.width + 1).lastIndexOf(' ');

      if (nextSpaceIndex === -1) { // hyphenates long words in narrow boxes
        idx2 = idx1 + this.width - 1;
        wrapped += this.message.substring(idx1, idx2) + "-\n";
        idx1 = idx2;
      } else {
        idx2 = idx1 + nextSpaceIndex;
        wrapped += this.message.substring(idx1, idx2) + "\n";
        idx1 = idx2 + 1;
      }
    }

    wrapped += this.message.substring(idx1);

    return wrapped;
  }
}

let string = 
'Four score and seven years ago, our fathers brought forth ' +
'upon this continent a new nation, conceived in liberty, and ' +
'dedicated to the principle that all men are created equal.';

let banner = new Banner(string, 40);
banner.displayBanner();

banner = new Banner(string, 20);
banner.displayBanner();

banner = new Banner(string, 7);
banner.displayBanner();

// +------------------------------------------+
// |                                          |
// |   Four score and seven years ago, our    |
// |     fathers brought forth upon this      |
// |   continent a new nation, conceived in   |
// | liberty, and dedicated to the principle  |
// |     that all men are created equal.      |
// |                                          |
// +------------------------------------------+
// +----------------------+
// |                      |
// | Four score and seven |
// |    years ago, our    |
// |   fathers brought    |
// |   forth upon this    |
// |   continent a new    |
// | nation, conceived in |
// |     liberty, and     |
// |   dedicated to the   |
// |  principle that all  |
// |   men are created    |
// |        equal.        |
// |                      |
// +----------------------+
// +---------+
// |         |
// |  Four   |
// |  score  |
// |   and   |
// |  seven  |
// |  years  |
// |  ago,   |
// |   our   |
// | fathers |
// | brought |
// |  forth  |
// |  upon   |
// |  this   |
// | contin- |
// |  ent a  |
// |   new   |
// | nation, |
// | concei- |
// | ved in  |
// | libert- |
// | y, and  |
// | dedica- |
// | ted to  |
// |   the   |
// | princi- |
// |   ple   |
// |  that   |
// | all men |
// |   are   |
// | created |
// | equal.  |
// |         |
// +---------+
