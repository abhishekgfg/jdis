import { ArrowRight, Target, Eye, Gem, Check } from "lucide-react";
import storyImg from "../about/image/story.png";

export default function CompanyStorySection() {
  return (
    <section className="bg-[#f8fbff] py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Story */}
        <div className="grid gap-7 items-center lg:grid-cols-[0.9fr_1.5fr] lg:gap-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Our Story
            </span>

            <h2 className="mt-3 text-[28px] font-bold leading-[1.12] text-[#071426] sm:text-[34px] lg:text-[34px] lg:leading-[1.1]">
              Technology Partner for <br className="hidden sm:block" />
              Global{" "}
              <span className="text-[#145cff]">Digital Growth</span>
            </h2>

            <p className="mt-5 text-[14px] leading-6 text-[#536174] max-w-[500px]">
              JD Infotech Solutions was founded with a vision to help businesses
              leverage technology for meaningful growth. Over the years, we have
              delivered innovative websites, mobile apps, enterprise software,
              AI solutions and digital experiences to clients across the world.
            </p>

            <p className="mt-2 text-[13px] leading-7 text-[#536174] max-w-[500px]">
              Our team of skilled professionals is passionate about building
              scalable, secure and future-ready solutions that solve real
              business problems.
            </p>

            <button className="mt-6 inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-md bg-[#145cff] px-6 text-[14px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#004be0] sm:w-auto">
              Our Journey
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-xl border border-[#dbe7f5] shadow-[0_15px_45px_rgba(15,23,42,0.14)] sm:h-[285px]">
            <img
              src={storyImg}
              alt="JD Infotech office workspace"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 flex h-[88px] items-center gap-4 rounded-xl border border-white/20 bg-[#061326]/90 px-4 text-white shadow-xl backdrop-blur-md sm:left-auto sm:right-5 sm:bottom-5 sm:h-[95px] sm:w-[210px] sm:gap-5 sm:px-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#ffb700]/40 bg-[#ffb700]/10 sm:h-12 sm:w-12">
                <Gem size={23} className="text-[#ffb700]" />
              </div>

              <div>
                <h3 className="text-[30px] font-bold leading-none">5+</h3>
                <p className="mt-1 text-[13px] leading-tight text-white">
                  Years of <br /> Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-xl border border-[#e5edf7] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:items-center lg:p-4">
            <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#145cff] to-[#6aa8ff] shadow-[0_12px_30px_rgba(20,92,255,0.35)] lg:w-16">
              <Target size={30} className="text-white" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase text-[#145cff]">
                Our Mission
              </span>
              <p className="mt-2 text-[12px] leading-5 text-[#536174]">
                Empowering businesses with innovative technology solutions that
                drive growth, efficiency and success.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-[#e5edf7] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:items-center lg:gap-5 lg:p-6">
            <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#145cff] to-[#6aa8ff] shadow-[0_12px_30px_rgba(20,92,255,0.35)]">
              <Eye size={30} className="text-white" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase text-[#145cff]">
                Our Vision
              </span>
              <p className="mt-2 text-[13px] leading-6 text-[#536174]">
                To be a global leader in digital transformation by delivering
                excellence, innovation and value.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-[#e5edf7] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:items-center lg:gap-5 lg:p-6">
            <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#145cff] to-[#6aa8ff] shadow-[0_12px_30px_rgba(20,92,255,0.35)] lg:w-10">
              <Gem size={30} className="text-white" />
            </div>

            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase text-[#145cff]">
                Our Values
              </span>


              <div className="mt-2 grid grid-cols-1 gap-x-5 gap-y-2 text-[11px] text-[#536174] sm:grid-cols-2 lg:text-[10px]">
                {[
                  "Integrity & Transparency",
                  "Client Success",
                  "Innovation & Excellence",
                  "Teamwork",
                  "Quality & Responsibility",
                  "Long Term Partnership",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#145cff]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
