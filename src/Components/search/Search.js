import React from "react";
import flight from "../../Assets/flight.png";
import ballon from "../../Assets/hot-air-balloon.png";
import "./searchStyle.css";

const Search = () => {
  return (
    <div name="search" className="search">
      <div className="container">
        <div className="left">
          <div className="text-fit">
            <h2>تا حالا کرمانشاه رفته اید</h2>
            <p>
              تاحالا کرمانشاه رفته‌اید؟ اگر بله، برای گردش و تفریح؟ یا فقط از
              این شهر زیبا گذر کرده‌اید؟ به هر حال این شهر زیبا را اکثرا فقط با
              طاق‌بستان و بیستون می‌شناسند. اما جاهای دیدنی کرمانشاه خیلی بیشتر
              از این حرف‌ها هستند. کرمانشاه جاذبه‌های تاریخی، مذهبی، و طبیعی
              زیادی دارد که می‌تواند تعطیلات بی‌نظیری را برای شما رقم بزند.
            </p>
          </div>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img
                  src={flight}
                  alt="ballon"
                  style={{ marginLeft: "1rem", width: "80px", height: "80px" }}
                />
              </div>
              <div>
                <h3>راحتی سفر</h3>
                <p>امکاناتی بی نظیر در طول سفر</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>لیدر</h3>
                <p>همراه با راهنما در طول سفر</p>
                <button>مشخصات</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">تخفیف 7% بر روی همه تور ها</h4>
            <p className="timer">12 ساعت مانده تا اتمام تخفیف</p>
            <p className="offers">دیدن تمامی پیشنهاد ها</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>مقصد</label>
              <select>
                <option value="1">آثار باستانی کرمانشاه</option>
                <option value="1">سراب صحنه و معبد آناهیتا</option>
                <option value="1">سراب پیران و روستای هجیج</option>
                <option value="1">غار قوری قله</option>
                <option value="1">غار پروآ</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>تاریخ رفت</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>تاریخ برگشت</label>
                <input type="date" />
              </div>
            </div>
            <button>ثبت تور</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
