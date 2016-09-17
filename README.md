## Getting started
Assumption - npm is already installed/available in the system.

Install Dependencies
- Get into the project directory
- Run command `npm install` for terminal

Different test profiles are defined within the `/profiles` directory

Following options are available to run the tests.
- `npm run test -- --profile <profile name>`
- `npm run test -- --tags @Google-Doodle,@Test2`
- `npm run test -- features/google.feature`
- `npm run test -- --format json:./results.json --profile local-safari --tags @Google-Doodle`

If no profile is specified then the `default` profile is used.
