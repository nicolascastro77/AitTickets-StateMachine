import { assign, createMachine, fromPromise } from "xstate";
import { fetchCountries } from "../utils/api";

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: fromPromise(() => fetchCountries()),
        onDone: {
          target: "success",
          actions: assign({ countries: ({ event }) => event.output }),
        },
        onError: {
          target: "failure",
          actions: assign({ error: "fallo el request" }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectCountry: "",
      countries: [],
      error: "",
    },
    states: {
      initial: {
        entry: assign({
          newPassenger: ({ context, event }) => (context.passengers = []),
          selectCountry: ({ context, event }) => (context.selectCountry = ""),
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
        ...fillCountries,
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
            guard: 'isValid'
          },
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
        after: {
          5000: {
            target: "initial",
            actions: "cleanContext",
          },
        },
        on: {
          FINISH: "initial",
        },
      },
    },
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
      }),
    },
    guards: {
      isValid: ({context}) => {
        return context.passengers.length > 0;
      },
    },
  }
);

export default bookingMachine;
