function popIt(stack) {
  if (stack.length === 0) {
    throw `Error 8080: attempted to POP from empty stack.`;
  } else { 
    return stack.pop();
  }
}

function tokenError(cmd) {
  throw `Error 8088: token ${cmd} not found in instruction set.`
}

function minilang(cmds) {
  let RAX = 0;
  let stack = [];
  cmds.split(' ').forEach(cmd => {
    switch(cmd) { 
      case 'PUSH': 
        stack.push(RAX);
        break;
      case 'ADD': 
        RAX += popIt(stack);
        break;
      case 'SUB':
        RAX -= popIt(stack);
        break;
      case 'MULT':
        RAX *= popIt(stack);
        break;
      case 'DIV':
        RAX = Math.floor(RAX / popIt(stack));
        break;
      case 'REMAINDER':
        RAX %= popIt(stack);
        break;
      case 'POP':
        RAX = popIt(stack);
        break;
      case 'PRINT':
        console.log(RAX);
        break;
      default:
        if (/^-?\d+$/.test(cmd)) {
          RAX = Number(cmd);
        } else {
          tokenError(cmd);
        }
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// def minilang(cmds)
//   reg = 0
//   stack = []
//   cmds.split.each do |cmd|
//     puts cmd unless cmd == 'PRINT'
//     case cmd
//     when 'PUSH'   then stack.push(reg)
//     when 'ADD'    then reg += stack.pop
//     when 'SUB'    then reg -= stack.pop
//     when 'MULT'   then reg *= stack.pop
//     when 'DIV'    then reg /= stack.pop
//     when 'MOD'    then reg %= stack.pop
//     when 'POP'    then reg = stack.pop
//     when 'PRINT'  then p "reg = #{reg} stack = #{stack}" 
//     else               reg = cmd.to_i
//     end
//   end
// end

// # (3 + (4 * 5) - 7) / (5 % 3)
// minilang('3 PRINT PUSH PRINT 5 PRINT MOD PRINT PUSH PRINT 7 PRINT PUSH PRINT 4 PRINT PUSH PRINT 5 PRINT MULT PRINT PUSH PRINT 3 PRINT ADD PRINT SUB PRINT DIV PRINT ')
