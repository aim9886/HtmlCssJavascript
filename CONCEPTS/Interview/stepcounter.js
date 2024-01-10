// Implementation of a simple counter object:

const counter = (function counter() {
    let value = 0;
    return {
      getValue: function() {
        return value;
      },
      changeBy: function(k) {
        value += k;
      },
    };
  })();

  const stepCounter = (k) => {
    const increment = () => {
      counter.changeBy(k);
    };

    const decrement = () => {
      counter.changeBy(-k);
    };

    const getValue = () => {
      return counter.getValue();
    };

    return {
      increment,
      decrement,
      getValue,
    };
  };

  const myStepCounter = stepCounter(5);
  myStepCounter.increment();
  myStepCounter.increment();
  myStepCounter.decrement();

  console.log(myStepCounter.getValue()); // Output should be 5
