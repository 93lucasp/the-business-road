<template>
  <div>
    <app-container class="py-6 flex items-center space-x-4">
      <button
        class="px-6 py-1.5 rounded-lg border border-solid focus:outline-none flex items-center justify-center"
        @click="setView('history')"
        :class="{
          'bg-green-700 text-white border-green-600': view === 'history',
          'border-gray-600': view === 'original-idea',
        }"
      >
        <icon-read class="w-4 h-4 fill-current mr-2" />
        History
      </button>
      <button
        class="px-6 py-1.5 rounded-lg border border-solid focus:outline-none flex items-center justify-center"
        @click="setView('original-idea')"
        :class="{
          'bg-green-700 text-white border-green-600': view === 'original-idea',
          'border-gray-600': view === 'history',
        }"
      >
        <icon-idea class="w-4 h-4 fill-current mr-2" />
        Original idea
      </button>
    </app-container>
    <app-container v-if="view === 'history'" class="py-6">
      <h1 class="font-bold text-xl md:text-3xl mb-4">
        The History of Whatsapp
      </h1>
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
              <b>Jan Koum</b> and <b>Brian Acton</b> decided to quit their jobs
              at Yahoo and relax while traveling around South America
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
              After a while they applied for the job positions at Facebook but
              they were refused
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
              Jan bought an iphone and he understood the potential of the Apple
              store. Hence the idea of creating an app that showed a status next
              to people's name
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
              Jan and Brian found a russian IOS developer Igor Solomennikov
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
              The app was developed and Whatsapp was founded in California, the
              name arrived from the simple sentence “What's up” and the word
              “app”
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
              People didn’t like the first version and it also had a lot of
              problems with battery and crash. Jan was disappointed and wanted
              to look for another job but Brian said to give it other few months
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
              Apple launched push notifications to say to people they weren’t
              using an app. So Jan changed Whatsapp to get notification every
              time when the user changes his status
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
              Founders noticed that people used status also to communicate so
              they understood the need of people and launched an instant
              messaging application
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              People loved the idea of logging in with just a phone number and
              sending messages to contacts using the internet instead of
              operator SMS plans. The number of users increased immediately to
              250.000. At this point Brian who wasn’t an active member decided
              to join Whatsapp
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
              Brian convinced ex-colleagues from Yahoo to invest 250.000$ in
              Whatsapp
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              In the beginning the app was only for iphone but after it became
              available also for Blackberry
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
              Moreover, Jan and Brian also worked for free for the first few
              years and the only big costs during the initial days were sending
              verification texts to users. To make up for this, the business
              model was changed to paid one (costing $0.99) as the app was
              spreading faster than the investments coming in
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
              The feature to send media was added to the app
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
              WhatsApp is one of the 20 most downloaded apps in USA
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
              Sequoia Capital invested 8 million for the 15% of the company
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
              Whatsapp had more than 200 million active users and 50 employees
              so Sequoia invested other 50 million. WhatsApp was valuated 1.5
              billion
            </div>
          </div>
        </div>
        <div class="py-8 md:py-0 flex flex-wrap">
          <div class="w-9/12 md:w-5/12 flex items-center">
            <div
              class="inline-block rounded-lg bg-gray-600 p-4 ml-auto relative h-auto"
            >
              The operating model was changed to a subscription model where the
              application was offered for free for the first year but the users
              were charged an annual subscription $1 fee after the trial period
              ended
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
              The number of monthly active users was more than 400 million
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
              Facebook bought Whatsapp for 19 billion (the biggest acquistion of
              the time) promising that ads wouldn’t be added
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
              Whatsapp became the most used messaging app with more than 600
              million active users
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
              The app became free again and in February 2016 the number of users
              was 1 billion
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
              The cofounder Brian left the company for the work on Signal
              Foundation
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
              CEO and cofounder Jan left WhatsApp
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
      <h1 class="font-bold text-xl md:text-3xl mb-4">
        The original Idea of Whatsapp
      </h1>
      <p class="text-lg">
        Was to create a new type of messanging app that would show statuses next
        to individual names of people.
      </p>
    </app-container>
  </div>
</template>

<script>
import AppContainer from "~/components/AppContainer.vue";
import IconIdea from "~/assets/icon/idea.svg";
import IconRead from "~/assets/icon/read.svg";

export default {
  components: {
    AppContainer,
    IconIdea,
    IconRead,
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