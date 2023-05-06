<!-- Please remove this file from your project -->
<template>
  <div class="min-h-screen md:px-0 px-5 mt-4 md:mt-8">
    <div
      :class="['h-60 md:h-80 w-full overflow-hidden rounded-lg']"
    >
      <img
        class="object-cover h-full w-full"
        src="/images/dc_08-copy.jpg"
        alt=""
      />
    </div>

    <!-- <LazyAccordiansSlide :slides="resources" /> -->
    <div
      class="bg-[#81d8d0] text-white flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between mt-8 py-4"
    >
      <div
        class="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center"
      >
        <img src="/images/logo.png" alt="" class="md:w-20" srcset="" />
        <span class="ml-4 font-bold text-2xl text-center"
          >We Are Daikin Official Channel Partner</span
        >
      </div>
      <div class="md:w-28 mr-4 whitespace-nowrap bg-[#333333] text-white p-2 rounded-md">
        <button type="submit" @click="$router.push('/contact')">
          Get in Touch
        </button>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-4 mt-8"
    >
      <div class="md:w-2/3">
        <div class="text-2xl text-gray-600 leading-7">This is dummay Title</div>
        <div class="text-2xl text-gray-600 leading-5 py-2">
          This is dummay Sub TitleTitle
        </div>
        <p>
          This text is dummay. This text is dummay. This text is dummay. This
          text is dummay. This text is dummay. This text is dummay. This text is
          dummay. This text is dummay. This text is dummay. This text is dummay.
          This text is dummay. This text is dummay. This text is dummay. This
          text is dummay. This text is dummay. This text is dummay. This text is
          dummay. This text is dummay. This text is dummay. This text is dummay.
          This text is dummay. This text is dummay. This text is dummay. This
          text is dummay. This text is dummay. This text is dummay. This text is
          dummay.
        </p>
      </div>
      <div class="md:w-1/3 order-first md:order-last">
        <div>
          <video width="400" controls>
            <source src="/images/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </div>
    <div
      class="my-12 flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-4"
    >
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="text-2xl leading-5 text-gray-600 font-bold inline-flex"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          232</span
        >
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Happy Clients</span> consequuntur quae qui
          deca rode</span
        >
      </div>
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="text-2xl leading-5 text-gray-600 font-bold inline-flex"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            if="svgComponent"
            class="mx-1 w-5 h-5 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path></svg
          >521</span
        >
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Projects</span> consequuntur quae qui deca
          rode</span
        >
      </div>
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="text-2xl leading-5 text-gray-600 font-bold inline-flex"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          1463</span
        >
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Hours of supports</span> consequuntur quae
          qui deca rode</span
        >
      </div>
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="text-2xl leading-5 text-gray-600 font-bold inline-flex"
          ><svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            if="svgComponent"
            class="mx-1 w-5 h-5 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path></svg
          >15</span
        >
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Hard Workers</span> consequuntur quae qui
          deca rode</span
        >
      </div>
    </div>
    <div
      class="my-12 flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between bg-[#81d8d0] text-white px-4 py-8"
    >
      <div class="md:w-1/3 flex flex-col">
        <span
          class="text-white text-2xl font-bold text-white leading-7 text-center"
          >25 Years of
        </span>
        <span class="text-white text-sm text-white leading-7 text-center"
          >Experience
        </span>
      </div>
      <div class="md:w-1/3 flex flex-col">
        <span
          class="text-white text-2xl font-bold text-white leading-7 text-center"
          >3500
        </span>
        <span class="text-white text-sm text-white leading-7 text-center"
          >Units Installed
        </span>
      </div>
      <div class="md:w-1/3 flex flex-col">
        <span
          class="text-white font-bold text-2xl text-white leading-7 text-center"
          >22,300
        </span>
        <span class="text-white text-sm text-white leading-7 text-center"
          >HP Installed
        </span>
      </div>
    </div>
    <div class="my-12">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 md:gap-y-16 pt-8"
      >
        <div class="border bg-white rounded-lg shadow-md shadow-none">
          <div>
            <img
              src="https://cdn.wellcertified.com/static/dashboard/knowledge-base.png"
              class="w-full rounded-t-md"
            />
          </div>
          <div class="p-4">
            <div class="font-bold text-primary-900"></div>
            <div class="text-primary-600 font-medium"></div>
            <div class="mt-4 text-sm text-primary-900">
              <span></span>
            </div>
            <div>
              <div>
                <div>
                  <p class="text-base font-semibold text-primary-900">
                    Daikin for All Your Needs
                  </p>
                  <p
                    class="text-sm font-normal text-primary-900 text-opacity-50"
                  >
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                  </p>
                  <a
                    href="https://resources.wellcertified.com/tools/driving-better-investment-decisions/"
                    target="_blank"
                    class="text-sm font-normal text-primary-600"
                    >Learn More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border bg-white rounded-lg shadow-md shadow-none">
          <div>
            <img
              src="https://cdn.wellcertified.com/static/dashboard/knowledge-base.png"
              class="w-full rounded-t-md"
            />
          </div>
          <div class="p-4">
            <div class="font-bold text-primary-900"></div>
            <div class="text-primary-600 font-medium"></div>
            <div class="mt-4 text-sm text-primary-900">
              <span></span>
            </div>
            <div>
              <div>
                <div>
                  <p class="text-base font-semibold text-primary-900">
                    Daikin for All Your Needs
                  </p>
                  <p
                    class="text-sm font-normal text-primary-900 text-opacity-50"
                  >
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                  </p>
                  <a
                    href="https://resources.wellcertified.com/tools/driving-better-investment-decisions/"
                    target="_blank"
                    class="text-sm font-normal text-blue-600"
                    >Learn More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border bg-white rounded-lg shadow-md shadow-none">
          <div>
            <img
              src="https://cdn.wellcertified.com/static/dashboard/knowledge-base.png"
              class="w-full rounded-t-md"
            />
          </div>
          <div class="p-4">
            <div class="font-bold text-primary-900"></div>
            <div class="text-primary-600 font-medium"></div>
            <div class="mt-4 text-sm text-primary-900">
              <span></span>
            </div>
            <div>
              <div>
                <div>
                  <p class="text-base font-semibold text-primary-900">
                    Daikin for All Your Needs
                  </p>
                  <p
                    class="text-sm font-normal text-primary-900 text-opacity-50"
                  >
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                    This is dummy test. This is dummy test. This is dummy test.
                  </p>
                  <a
                    href="https://resources.wellcertified.com/tools/driving-better-investment-decisions/"
                    target="_blank"
                    class="text-sm font-normal text-primary-600"
                    >Learn More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-12">
      <h1 class="my-6 font-bold text-lg leading-5">
        FAQ's ON EXHIBITION STALL DESIGN
      </h1>
      <LazyAccordiansBace
        extra-class="px-4 py-4 border border-b-2"
        class="text-blue-1500 md:text-xl sm:text-sm xs: text-sm"
      >
        <template #header>
          <div class="text-sm text-primary-900 pl-5 flex justify-between pr-16">
            First Heading
          </div>
        </template>

        <template #content>
          <div class="px-4">text discription</div>
        </template>
      </LazyAccordiansBace>
      <LazyAccordiansBace
        extra-class="px-4 py-4 border border-b-2"
        class="text-blue-1500 md:text-xl sm:text-sm xs: text-sm"
      >
        <template #header>
          <div class="text-sm text-primary-900 pl-5 flex justify-between pr-16">
            Second Heading
          </div>
        </template>

        <template #content>
          <div class="px-4">text discription</div>
        </template>
      </LazyAccordiansBace>
      <LazyAccordiansBace
        extra-class="px-4 py-4 border border-b-2"
        class="text-blue-1500 md:text-xl sm:text-sm xs: text-sm"
      >
        <template #header>
          <div class="text-sm text-primary-900 pl-5 flex justify-between pr-16">
            Third Heading
          </div>
        </template>

        <template #content>
          <div class="px-4">text discription</div>
        </template>
      </LazyAccordiansBace>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  computed: {
    resources() {
      return [
        {
          bgImg: `/images/dc_08-copy.jpg`,
        },
        {
          bgImg: `/images/dc_09-copy.jpg`,
        },
        {
          bgImg: `/images/dc_14-copy.jpg`,
        },
      ];
    },
  },
};
</script>
