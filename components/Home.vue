<!-- Please remove this file from your project -->
<template>
  <div class="min-h-screen md:px-0 px-5 mt-4 md:mt-8">
    <div :class="['h-60 md:h-80 w-full overflow-hidden rounded-lg']">
      <LazyAccordiansSlide :slides="resources" />
    </div>

    <div
      class="bg-[#333333] text-white flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between mt-8 py-4 rounded-md"
    >
      <div
        class="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center"
      >
        <span class="ml-4 font-bold text-2xl text-center"
          >We Are Daikin Official Channel Partner</span
        >
      </div>
      <div
        class="whitespace-nowrap bg-[#81d8d0] text-white font-bold py-2 px-4 mr-2 rounded-md"
      >
        <button type="submit" @click="$router.push('/contact')">
          Get in Touch
        </button>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-4 mt-8"
    >
      <div class="md:w-2/3 md:pr-16">
        <div class="text-2xl text-[#333333] leading-7 font-bold">About us</div>
        <div class="text-2xl text-[#333333] leading-5 py-4 font-semibold">
          Year of Experience
        </div>
        <p class="text-base leading-5 text-[#333333] font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div
        class="md:w-1/3 order-first md:order-last hover:scale-125 transition-all duration-500 cursor-pointer"
      >
        <div>
          <video class="w-full" controls>
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
        <span class="flex">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            if="svgComponent"
            class="mx-1 w-5 h-5 my-auto text-[#81d8d0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          <span
            data-target="200"
            class="count text-2xl leading-5 text-gray-600 font-bold inline-flex"
            >0</span
          >
        </span>
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Hard Workers</span> consequuntur quae qui
          deca rode</span
        >
      </div>
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-[#81d8d0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <span
            data-target="232"
            class="count text-2xl leading-5 text-gray-600 font-bold inline-flex"
          >
            0</span
          >
        </span>
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Happy Clients</span> consequuntur quae qui
          deca rode</span
        >
      </div>
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            if="svgComponent"
            class="mx-1 w-5 h-5 my-auto text-[#81d8d0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path>
          </svg>
          <span
            data-target="521"
            class="count text-2xl leading-5 text-gray-600 font-bold inline-flex"
            >0</span
          >
        </span>
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Projects</span> consequuntur quae qui deca
          rode</span
        >
      </div>
      <div class="flex flex-col shadow md:space-y-2 p-4 md:w-1/4">
        <span class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-[#81d8d0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>

          <span
            data-target="1463"
            class="count text-2xl leading-5 text-gray-600 font-bold inline-flex"
          >
            0</span
          >
        </span>
        <span class="text-sm leading-5 text-gray-600"
          ><span class="font-bold">Hours of supports</span> consequuntur quae
          qui deca rode</span
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
            <img src="/images/slide-5.jpg" class="w-full rounded-t-md h-32" />
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
                    Daikin ACs for Extreme Temperatures
                  </p>
                  <p class="text-sm font-normal text-primary-900">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum. like
                    Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div class="mt-2">
                    <a
                      href="#"
                      target="_blank"
                      class="text-sm font-normal text-white bg-[#81d8d0] rounded-md p-2"
                      >Download</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border bg-white rounded-lg shadow-md shadow-none">
          <div>
            <img src="/images/slide-3.jpg" class="w-full rounded-t-md h-32" />
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
                    Residential ACs - Innovation that cools you and the planet.
                  </p>
                  <p class="text-sm font-normal text-primary-900">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div class="mt-2">
                    <a
                      href="#"
                      target="_blank"
                      class="text-sm font-normal text-white bg-[#81d8d0] rounded-md p-2"
                      >Download</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border bg-white rounded-lg shadow-md shadow-none">
          <div>
            <img src="/images/slide-4.jpg" class="w-full rounded-t-md h-32" />
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
                    Light Commercial - Best of designs with High efficiency.
                  </p>
                  <p class="text-sm font-normal text-primary-900">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div class="mt-2">
                    <a
                      href="#"
                      target="_blank"
                      class="text-sm font-normal text-white bg-[#81d8d0] rounded-md p-2"
                      >Download</a
                    >
                  </div>
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
    <div class="my-12">
      <h1 class="my-6 font-bold text-lg leading-5">Our VRV Products</h1>
      <vue-tiny-slider v-bind="tinySliderOptions">
        <div v-for="(slide, i) in resources1" :key="i">
          <div>
            <img :src="slide.bgImg" alt="" srcset="" />
          </div>
        </div>
      </vue-tiny-slider>

      <!-- <LazyAccordiansSlide :slides="resources1" /> -->
    </div>
    <div class="my-12">
      <h1 class="text-2xl font-bold leading-7 text-[#333333]">Our Vision</h1>
      <p class="text-base text-[#333333] font-semibold leading-5 mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <div class="my-12">
      <img src="/images/Map.webp" alt="" class="w-full" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css",
        },
      ],
    };
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 3,
        swipeAngle: 45,
        nav: false,
        autoplay: true,
        speed: 400,
      },
      slideIndex: 1,
    };
  },
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
    resources1() {
      return [
        {
          bgImg: `/images/slide-2.jpg`,
        },
        {
          bgImg: `/images/slide-3.jpg`,
        },
        {
          bgImg: `/images/slide-4.jpg`,
        },
        {
          bgImg: `/images/slide-2.jpg`,
        },
        {
          bgImg: `/images/slide-3.jpg`,
        },
        {
          bgImg: `/images/slide-4.jpg`,
        },
      ];
    },
  },
  mounted() {
    const counters = document.querySelectorAll(".count");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 10);
        } else {
          count.innerText = target;
        }
      };
      updateCount();
    });
  },
};
</script>
<style>
.tns-controls {
  display: none !important;
}
.tns-outer button {
  display: none !important;
}
</style>
