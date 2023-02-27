const regex = /\b(Apple)+\b/g;

const fruit = 'apple, Apple, bannana kiwi AppleOrange, etc';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}