import { ArrowRight, Target, Eye, Gem, Check } from "lucide-react";
import storyImg from "../about/image/story.png";

export default function CompanyStorySection() {
  return (
    <section className="bg-[#f8fbff] py-10">
      <div className="mx-auto px-6 lg:px-12">
        {/* Top Story */}
        <div className="grid lg:grid-cols-[0.9fr_1.5fr] gap-10 items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Our Story
            </span>

            <h2 className="mt-3 text-[34px] lg:text-[34px] leading-[1.1] font-bold text-[#071426]">
              Technology Partner for <br />
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

            <button className="mt-6 h-[48px] px-6 rounded-md bg-[#145cff] hover:bg-[#004be0] text-white text-[14px] font-semibold inline-flex items-center gap-3 shadow-lg shadow-blue-500/20 transition-all">
              Our Journey
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-[0_15px_45px_rgba(15,23,42,0.14)] border border-[#dbe7f5] h-[285px]">
            <img
              src={storyImg}
              alt="JD Infotech office workspace"
              className="w-full h-full object-cover"
            />

            <div className="absolute right-5 bottom-5 w-[210px] h-[95px] rounded-xl bg-[#061326]/90 border border-white/20 backdrop-blur-md text-white flex items-center gap-5 px-6 shadow-xl">
              <div className="w-12 h-12 rounded-full border border-[#ffb700]/40 bg-[#ffb700]/10 flex items-center justify-center">
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
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="bg-white rounded-xl border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.06)] p-4 flex items-center gap-5">
            <div className="w-16 h-12 min-w-12 rounded-full bg-gradient-to-br from-[#145cff] to-[#6aa8ff] shadow-[0_12px_30px_rgba(20,92,255,0.35)] flex items-center justify-center">
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

          <div className="bg-white rounded-xl border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.06)] p-6 flex items-center gap-5">
            <div className="w-12 h-12 min-w-12 rounded-full bg-gradient-to-br from-[#145cff] to-[#6aa8ff] shadow-[0_12px_30px_rgba(20,92,255,0.35)] flex items-center justify-center">
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

          <div className="bg-white rounded-xl border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.06)] p-6 flex items-center gap-5">
            <div className="w-10 h-12 min-w-12 rounded-full bg-gradient-to-br from-[#145cff] to-[#6aa8ff] shadow-[0_12px_30px_rgba(20,92,255,0.35)] flex items-center justify-center">
              <Gem size={30} className="text-white" />
            </div>

            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase text-[#145cff]">
                Our Values
              </span>


              <div className="mt-2 grid grid-cols-2 gap-x-5 gap-y-2 text-[10px] text-[#536174]">
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