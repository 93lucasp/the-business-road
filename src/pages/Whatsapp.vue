<template>
  <div>
    <app-container class="py-6 flex items-center space-x-4">
      <button
        class="px-6 py-1.5 rounded-lg border border-solid focus:outline-none"
        @click="setView('history')"
        :class="{
          'bg-green-700 text-white border-green-600': view === 'history',
          'border-gray-600': view === 'original-idea',
        }"
      >
        History
      </button>
      <button
        class="px-6 py-1.5 rounded-lg border border-solid focus:outline-none"
        @click="setView('original-idea')"
        :class="{
          'bg-green-700 text-white border-green-600': view === 'original-idea',
          'border-gray-600': view === 'history',
        }"
      >
        Original idea
      </button>
    </app-container>
    <app-container v-if="view === 'history'" class="py-6">
      <h1 class="font-bold text-xl md:text-3xl mb-4">The History of Whatsapp</h1>
      <div class="relative">
        <span
          class="absolute inset-y-0 block h-full w-px bg-gray-700 left-1/2"
        ></span>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                2007
              </div>
              Jan Koum and Brian Acton decided to quit their job at Yahoo and to
              have a rest travelling in south america
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            2007
          </div> -->
              After a white they decided to apply for facebook but they have
              been refused
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                January 2009
              </div>
              Jan bought an iphone and he understood the potential of app on
              apple store and he had the idea to create a status near the name
              of people so he discussed the idea with Brian.
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            2007
          </div> -->
              They found a russian IOS developer Igor Solomennikov
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-green-700 text-white px-2 py-1 rounded-lg"
              >
                24 february 2009
              </div>
              They developed the app and they founded Whatsapp in California,
              the name arrived from the sentence “What's up” and the word “app”
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-green-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            2007
          </div> -->
              The first version didn’t like to the people and had also a lot of
              problems with battery and crash, Jan was disappointed and wanted
              to look for another job but Brian said that he would be an idiot
              to leave in that moment to give it other few months.
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                June 2009
              </div>
              Apple launched push notification to say to people they weren’t
              using an app. So Jan changed Whatsapp to get a notification when
              the user changes his status
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            2007
          </div> -->
              They noticed that people used status also to communicate so they
              understood that the need was to text with people and they launched
              that was a instant messaging application
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            June 2009
          </div> -->
              People loved the idea of logging in with just a phone number and
              sending messages to contacts using the internet instead of
              operator SMS plans, and the number of the user increased very fast
              to 250.000, at this point Brian that wasn’t an active member
              decided to join Whatsapp
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                October 2009
              </div>
              Brian convinced 5 ex-collagues of yahoo to invest 250.000$ in
              Whatsapp
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            June 2009
          </div> -->
              in the beginning the app was only for iphone but after they found
              another developer and they started to develop it also for
              blackberry
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <!-- <div class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg">
            October 2009
          </div> -->
              Moreover, Koum and Acton also worked for free for the first few
              years and the only big costs during the initial days were sending
              verification texts to users. To make up for this, the business
              model was changed to paid one (costing $0.99) as the application
              was spreading faster than the investments coming in.
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                December 2009
              </div>
              They added the feature to send also media
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                2011
              </div>
              Whatsapp is one of the first 20 app downloaded in USA
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                April 2011
              </div>
              Sequoia invested 8 milion for the 15% of the company
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                February 2013
              </div>
              whatsapp had more than 200 milions of active users and 50
              employees and Sequoia invested other 50 milions and whatsapp was
              valuated 1.5 bilion
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <!-- <div
            class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
          >
            April 2011
          </div> -->
              Whatsapp changed the operating model to a subscription model where
              the application was offered for free for the first year but the
              users were charged an annual subscription fee of $1 after the
              trial ended.
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                December 2013
              </div>
              whatsapp had more than 400 milions active monthly user
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-green-700 text-white px-2 py-1 rounded-lg"
              >
                February 2014
              </div>
              Facebook bought whatsapp for 19 billion(the biggest acquiring of
              the time) promising that they wouldn’t add ads
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-green-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                August 2014
              </div>
              Whatsapp was the most used messagging app with more of 600 milions
              of active user
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                January 2016
              </div>
              Whatsapp is again free and in february 2016 the user were 1 bilion
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap justify-end">
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -left-4 top-1/2 -mt-4"
            >
            </span>
          </div>
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 mr-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -left-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                September 2017
              </div>
              The coufounder Brian left the company to work on Signal
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              <div
                class="absolute -top-4 -right-4 bg-gray-700 px-2 py-1 rounded-lg"
              >
                April 2018
              </div>
              ceo and coufound Jan left whatsapp
            </div>
          </div>
          <div class="hidden md:inline-block md:w-1/12 relative py-16">
            <span
              class="bg-gray-800 inline-block w-8 h-8 border-2 border-solid border-gray-600 rounded-full absolute -right-4 top-1/2 -mt-4"
            >
            </span>
          </div>
        </div>
      </div>
    </app-container>

    <app-container v-if="view === 'original-idea'" class="py-6 relative">
      <h1 class="font-bold text-xl md:text-3xl mb-4">The original Idea of Whatsapp</h1>
      <p class="text-lg">
        It was to build an app that would show statuses next to individual names of the people
      </p>
    </app-container>
  </div>
</template>

<script>
import AppContainer from "~/components/AppContainer.vue";

export default {
  components: {
    AppContainer,
  },
  data() {
    return {
      view: "history",
    };
  },
  methods: {
    setView(value) {
      this.view = value;
    },
  },
};
</script>

<style>
</style>