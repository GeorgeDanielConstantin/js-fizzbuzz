for (let i = 1; i <= 100; i++) {
    let output;

    if ((i % 3 == 0) && (i % 5 == 0)) {

        output = `<li class=box>FizzBuzz</li>`;

    } else if (i % 5 == 0) {

        output = `<li class=box>Buzz</li>`;

    } else if (i % 3 == 0) {

        output = `<li class=box>Fizz</li>`;

    } else {
        output = `<li class=box>${i}</li>`;
    }

    document.getElementById('fizzbuzz_container').innerHTML += output;
}