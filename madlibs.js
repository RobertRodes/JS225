function madlibs(template){
  const WORDS = {
    adj:  'quick lazy sleepy noisy hungry'.split(' '),
    noun: 'fox dog head leg tail cat'.split(' '),
    verb: 'jumps lifts bites licks pats'.split(' '),
    adv:  'easily lazily noisily excitedly'.split(' '),
  }

  const sample = (partOfSpeech) => {
    const wordCount = WORDS[partOfSpeech].length;
    const wordIndex = [Math.floor(Math.random() * wordCount)];
    return WORDS[partOfSpeech][wordIndex];
  }

  const repFunc = (match) => {
    match = match.replace(/[@_]/g, '');
    return sample(match);
  }

  return template.replace(/@_\w+_@/g, repFunc);
}

const template1 = 
`The @_adj_@ brown @_noun_@ @_adv_@
@_verb_@ the @_adj_@ yellow
@_noun_@, who @_adv_@ @_verb_@ his
@_noun_@ and looks around.`

const template2 = `The @_noun_@ @_verb_@ the @_noun_@'s @_noun_@.`;

console.log(madlibs(template1));
// The sleepy brown head excitedly
// lifts the sleepy yellow
// fox, who excitedly licks his
// dog and looks around.

console.log(madlibs(template2));
// The tail bites the cat's head.