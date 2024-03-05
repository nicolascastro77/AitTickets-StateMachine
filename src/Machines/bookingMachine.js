import { assign, createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectCountry: "",
  },
  states: {
    initial: {
      entry: assign({
        newPassenger: ({ context, event }) => (context.passengers = []),
        selectCountry: ({ context, event }) => (context.selectCountry =""),
      }),
      on: {
        START: {
          target: "search",
        },
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: "passengers",
          actions: assign({
            selectCountry: ({ event }) => event.selectCountry,
          }),
        },
        CANCEL: "initial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
        ADD: {
          target: "passengers",
          actions: assign({
            newPassenger: ({ context, event }) =>
              context.passengers.push(event.newPassenger),
          }),
        },
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
  },
});

export default bookingMachine;
