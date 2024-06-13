/* eslint-disable @next/next/no-img-element */
'use client'

import useMobile from "@/hooks/useMobile";
import { ReactNode } from "react";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-lg md:text-xl font-bold mt-5">{children}</h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-base md:text-lg font-semibold mt-1">{children}</h3>
);

const content = {
  delivery: {
    title:
      "Giới thiệu về dịch vụ vận chuyển hai chiều Việt Nam - Quốc Tế của AD Logistic",
    description: (
      <div>
        <p>
          Chào mừng quý khách đến với AD Logistic - người bạn đồng hành tin cậy
          trong hành trình vận chuyển hàng hóa quốc tế. Với nhiều năm kinh
          nghiệm trong lĩnh vực logistics, AD Logistic tự hào mang đến cho quý
          khách hàng dịch vụ vận chuyển hai chiều Việt Nam - Quốc Tế an toàn,
          nhanh chóng và hiệu quả.
        </p>
        <H2>Tại sao chọn AD Logistic?</H2>
        <H3>1. Mạng lưới vận chuyển rộng khắp</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi có mạng lưới đối tác chiến lược toàn cầu, bao phủ mọi quốc
          gia và vùng lãnh thổ. Bất kể hàng hóa của bạn cần được gửi đi đâu, AD
          Logistic luôn đảm bảo rằng chúng sẽ đến nơi một cách an toàn và đúng
          hẹn.
        </p>
        <H3>2. Đội ngũ chuyên nghiệp và tận tâm</H3>
        <p className="mb-3 text-sm md:text-base">
          Đội ngũ nhân viên của chúng tôi được đào tạo chuyên sâu về các quy
          trình vận chuyển quốc tế, luôn sẵn sàng hỗ trợ và tư vấn quý khách
          trong mọi khâu, từ đóng gói, thủ tục hải quan cho đến giao nhận tại
          điểm đến.
        </p>
        <H3>3. Giải pháp vận chuyển linh hoạt</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi cung cấp nhiều hình thức vận chuyển đa dạng, từ đường biển,
          đường hàng không đến đường bộ và đường sắt, đáp ứng mọi nhu cầu về
          thời gian và chi phí của khách hàng.
        </p>
        <H3>4. Công nghệ hiện đại</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic áp dụng các công nghệ tiên tiến trong quản lý và theo dõi
          lô hàng, giúp quý khách dễ dàng giám sát hành trình của hàng hóa mọi
          lúc, mọi nơi qua hệ thống tracking trực tuyến.
        </p>
        <H2>Các dịch vụ vận chuyển hai chiều Việt Nam - Quốc Tế</H2>
        <H3>Vận chuyển hàng không</H3>
        <p className="mb-3 text-sm md:text-base">
          Nhanh chóng và an toàn, dịch vụ vận chuyển hàng không của chúng tôi là
          lựa chọn lý tưởng cho các lô hàng yêu cầu giao nhanh và có giá trị
          cao.
        </p>
        <H3>Vận chuyển đường biển</H3>
        <p className="mb-3 text-sm md:text-base">
          Tiết kiệm và hiệu quả, dịch vụ vận chuyển đường biển phù hợp cho các
          lô hàng lớn, cồng kềnh và không yêu cầu giao hàng gấp.
        </p>
        <H3>Vận chuyển đa phương thức</H3>
        <p className="mb-3 text-sm md:text-base">
          Kết hợp ưu điểm của nhiều hình thức vận chuyển, dịch vụ vận chuyển đa
          phương thức của AD Logistic đảm bảo tối ưu hóa chi phí và thời gian
          giao nhận.
        </p>
        <H3>Dịch vụ hải quan</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi hỗ trợ quý khách hoàn tất mọi thủ tục hải quan một cách
          nhanh chóng và chính xác, giúp lô hàng của bạn thông quan thuận lợi.
        </p>
        <H3>Bảo hiểm hàng hóa</H3>
        <p className="mb-3 text-sm md:text-base">
          Để bảo vệ tối đa lợi ích của khách hàng, chúng tôi cung cấp dịch vụ
          bảo hiểm hàng hóa, đảm bảo đền bù trong trường hợp có sự cố xảy ra.
        </p>
        <H2>Cam kết của chúng tôi</H2>
        <p className="mb-3 text-sm md:text-base">
          Tại AD Logistic, chúng tôi cam kết mang đến cho khách hàng dịch vụ vận
          chuyển hai chiều Việt Nam - Quốc Tế với chất lượng vượt trội, giá cả
          cạnh tranh và sự hài lòng tối đa. Hãy để AD Logistic trở thành cầu nối
          tin cậy giữa bạn và thế giới, giúp công việc kinh doanh của bạn phát
          triển mạnh mẽ và bền vững.
        </p>
      </div>
    ),
  },
  fulfillment: {
    title: "Giới thiệu về dịch vụ Fulfillment của AD Logistic",
    description: (
      <div>
        <p>
          Chào mừng quý khách đến với AD Logistic, đối tác tin cậy hàng đầu
          trong lĩnh vực logistics và fulfillment tại Việt Nam. Với mục tiêu hỗ
          trợ các doanh nghiệp tối ưu hóa quy trình kinh doanh, chúng tôi mang
          đến dịch vụ fulfillment toàn diện và chuyên nghiệp, giúp quý khách
          hàng tập trung phát triển thương hiệu và gia tăng doanh số.
        </p>
        <H2>Tại sao chọn dịch vụ Fulfillment của AD Logistic?</H2>
        <H3>1. Kho bãi hiện đại và an toàn</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic sở hữu hệ thống kho bãi rộng rãi, trang bị đầy đủ các
          thiết bị hiện đại và hệ thống quản lý thông minh, đảm bảo hàng hóa của
          quý khách được bảo quản tốt nhất và luôn sẵn sàng để xuất đi.
        </p>
        <H3>2. Quy trình xử lý đơn hàng chuyên nghiệp</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi áp dụng các quy trình xử lý đơn hàng tối ưu từ nhận hàng,
          kiểm đếm, đóng gói cho đến giao hàng. Mọi quy trình đều được thực hiện
          nhanh chóng, chính xác và hiệu quả, giảm thiểu tối đa sai sót.
        </p>
        <H3>3. Hệ thống quản lý tồn kho thông minh</H3>
        <p className="mb-3 text-sm md:text-base">
          Với công nghệ quản lý tồn kho tiên tiến, quý khách có thể dễ dàng theo
          dõi tình trạng hàng hóa, mức tồn kho và lịch sử đơn hàng mọi lúc, mọi
          nơi, giúp việc quản lý kinh doanh trở nên dễ dàng và hiệu quả hơn.
        </p>
        <H3>4. Giao hàng nhanh chóng và đáng tin cậy</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic hợp tác với các đơn vị vận chuyển uy tín, đảm bảo hàng hóa
          được giao đến tay khách hàng một cách nhanh chóng và an toàn. Chúng
          tôi cung cấp các tùy chọn giao hàng linh hoạt, phù hợp với mọi nhu cầu
          của quý khách.
        </p>
        <H3>5. Dịch vụ khách hàng tận tâm</H3>
        <p className="mb-3 text-sm md:text-base">
          Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi
          thắc mắc của quý khách. Chúng tôi cam kết mang đến trải nghiệm dịch vụ
          tốt nhất và sự hài lòng tuyệt đối cho khách hàng.
        </p>
        <H2>Các dịch vụ Fulfillment của AD Logistic</H2>
        <H3>Tiếp nhận và kiểm tra hàng hóa</H3>
        <p>
          Chúng tôi tiếp nhận hàng hóa từ nhà cung cấp, kiểm tra chất lượng và
          số lượng để đảm bảo hàng hóa đúng yêu cầu và sẵn sàng nhập kho.
        </p>
        <H3>Quản lý tồn kho</H3>
        <p>
          Hệ thống quản lý tồn kho thông minh giúp theo dõi chính xác lượng hàng
          tồn, cảnh báo khi hàng hóa gần hết và hỗ trợ lập kế hoạch nhập hàng
          kịp thời.
        </p>
        <H3>Đóng gói và nhãn mác</H3>
        <p>
          Chúng tôi cung cấp dịch vụ đóng gói chuyên nghiệp, đảm bảo hàng hóa
          được đóng gói an toàn, thẩm mỹ và đúng chuẩn. Ngoài ra, chúng tôi còn
          cung cấp dịch vụ in nhãn mác theo yêu cầu của quý khách.
        </p>
        <H3>Xử lý đơn hàng và giao nhận</H3>
        <p>
          Khi có đơn hàng mới, chúng tôi nhanh chóng lấy hàng, đóng gói và giao
          đến địa chỉ của khách hàng. Chúng tôi theo dõi quá trình giao hàng và
          cập nhật thông tin liên tục để quý khách có thể yên tâm.
        </p>
        <H3>Dịch vụ hậu mãi</H3>
        <p>
          AD Logistic hỗ trợ xử lý các vấn đề phát sinh sau khi giao hàng như
          đổi trả, hoàn tiền và giải đáp thắc mắc của khách hàng, giúp quý khách
          duy trì mối quan hệ tốt đẹp với người mua.
        </p>
        <H3>Cam kết của chúng tôi</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cam kết mang đến dịch vụ fulfillment toàn diện, chuyên
          nghiệp và hiệu quả, giúp quý khách hàng tiết kiệm thời gian, chi phí
          và tập trung phát triển kinh doanh. Hãy để AD Logistic trở thành đối
          tác đáng tin cậy trong hành trình chinh phục thị trường và xây dựng
          thương hiệu của bạn.
        </p>
      </div>
    ),
  },
  warehouse: {
    title:
      "Giới thiệu về dịch vụ cho thuê kho bãi và nhân sự tại 200 quốc gia của AD Logistic",
    description: (
      <div>
        <p>
          Chào mừng quý khách đến với AD Logistic, đối tác toàn cầu tin cậy
          trong lĩnh vực logistics. Chúng tôi tự hào giới thiệu dịch vụ cho thuê
          kho bãi và nhân sự chuyên nghiệp tại hơn 200 quốc gia, giúp quý khách
          hàng tối ưu hóa chuỗi cung ứng và nâng cao hiệu quả kinh doanh trên
          toàn thế giới.
        </p>
        <H2>Tại sao chọn dịch vụ của AD Logistic?</H2>
        <H3>1. Mạng lưới kho bãi toàn cầu</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic sở hữu và quản lý hệ thống kho bãi hiện đại tại hơn 200
          quốc gia, đáp ứng mọi nhu cầu lưu trữ và quản lý hàng hóa của quý
          khách. Kho bãi của chúng tôi được trang bị công nghệ tiên tiến, đảm
          bảo an toàn và hiệu quả cho hàng hóa của bạn.
        </p>
        <H3>2. Đội ngũ nhân sự chuyên nghiệp</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi cung cấp đội ngũ nhân sự được đào tạo chuyên sâu, giàu kinh
          nghiệm trong lĩnh vực logistics. Nhân viên của chúng tôi sẵn sàng hỗ
          trợ quý khách trong mọi khâu, từ tiếp nhận, xử lý đến vận chuyển hàng
          hóa, đảm bảo quy trình vận hành trơn tru và hiệu quả.
        </p>
        <H3>3. Giải pháp linh hoạt và đa dạng</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cung cấp các giải pháp cho thuê kho bãi và nhân sự linh
          hoạt, phù hợp với mọi quy mô doanh nghiệp và loại hình hàng hóa. Chúng
          tôi luôn sẵn sàng tùy chỉnh dịch vụ theo yêu cầu cụ thể của quý khách,
          đảm bảo đáp ứng mọi nhu cầu kinh doanh.
        </p>
        <H3>4. Công nghệ quản lý tiên tiến</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi áp dụng hệ thống quản lý kho bãi và nhân sự thông minh, cho
          phép quý khách dễ dàng theo dõi tình trạng hàng hóa và quản lý hoạt
          động nhân sự từ xa. Hệ thống của chúng tôi đảm bảo tính minh bạch,
          chính xác và cập nhật liên tục.
        </p>
        <H3>5. Hỗ trợ toàn diện và tận tâm</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cam kết mang đến dịch vụ khách hàng chuyên nghiệp và tận
          tâm. Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc
          và xử lý kịp thời các vấn đề phát sinh, giúp quý khách hàng yên tâm
          tập trung vào hoạt động kinh doanh chính.
        </p>
        <H2>
          Các dịch vụ cho thuê kho bãi và nhân sự tại 200 quốc gia của AD
          Logistic
        </H2>
        <H3>Cho thuê kho bãi</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi cung cấp dịch vụ cho thuê kho bãi ngắn hạn và dài hạn, với
          các loại kho đa dạng từ kho tiêu chuẩn, kho lạnh, đến kho bảo quản đặc
          biệt. Kho bãi của chúng tôi đáp ứng mọi yêu cầu về lưu trữ và bảo quản
          hàng hóa.
        </p>
        <H3>Quản lý kho bãi</H3>
        <p className="mb-3 text-sm md:text-base">
          Dịch vụ quản lý kho bãi của chúng tôi bao gồm kiểm soát hàng tồn kho,
          xử lý đơn hàng, đóng gói và phân phối. Chúng tôi đảm bảo quy trình
          quản lý kho bãi chính xác, hiệu quả và tiết kiệm chi phí cho quý
          khách.
        </p>
        <H3>Cho thuê nhân sự logistics</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cung cấp đội ngũ nhân sự chuyên nghiệp, bao gồm nhân viên
          kho, quản lý kho, nhân viên vận hành và chuyên gia logistics. Chúng
          tôi đảm bảo cung cấp nhân sự chất lượng, đáp ứng mọi yêu cầu công việc
          và giúp quý khách tối ưu hóa hoạt động kinh doanh.
        </p>
        <H3>Tư vấn và hỗ trợ logistics</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi cung cấp dịch vụ tư vấn và hỗ trợ logistics toàn diện, giúp
          quý khách hoạch định chiến lược, tối ưu hóa chuỗi cung ứng và nâng cao
          hiệu quả kinh doanh. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng
          đồng hành cùng quý khách trên mọi chặng đường phát triển.
        </p>
        <H3>Cam kết của chúng tôi</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cam kết mang đến dịch vụ cho thuê kho bãi và nhân sự
          chuyên nghiệp, đáng tin cậy tại hơn 200 quốc gia. Chúng tôi không
          ngừng nỗ lực cải tiến và nâng cao chất lượng dịch vụ, đảm bảo mang lại
          sự hài lòng tối đa cho quý khách hàng. Hãy để AD Logistic trở thành
          đối tác chiến lược trong hành trình mở rộng kinh doanh và chinh phục
          thị trường toàn cầu của bạn.
        </p>
      </div>
    ),
  },
  order: {
    title: "Giới thiệu về dịch vụ Mua Hàng Hộ của AD Logistic",
    description: (
      <div>
        <p>
          Chào mừng quý khách đến với AD Logistic, chuyên gia hàng đầu trong
          lĩnh vực logistics và mua hàng hộ. Với sứ mệnh giúp quý khách tiếp cận
          và sở hữu những sản phẩm yêu thích từ khắp nơi trên thế giới, chúng
          tôi tự hào mang đến dịch vụ mua hàng hộ nhanh chóng, an toàn và tiện
          lợi.
        </p>
        <H2>Tại sao chọn dịch vụ mua hàng hộ của AD Logistic?</H2>
        <H3>1. Kết nối toàn cầu</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic có mạng lưới đối tác rộng khắp trên toàn cầu, giúp quý
          khách dễ dàng mua sắm từ các trang web quốc tế uy tín và nổi tiếng.
          Chúng tôi mang đến cho quý khách hàng trải nghiệm mua sắm không giới
          hạn, từ Mỹ, Châu Âu, Nhật Bản đến Hàn Quốc và nhiều quốc gia khác.
        </p>
        <H3>2. Dịch vụ trọn gói</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi cung cấp dịch vụ mua hàng hộ trọn gói, từ khâu tìm kiếm sản
          phẩm, đàm phán giá cả, đặt hàng, thanh toán, cho đến vận chuyển về
          Việt Nam. Quý khách chỉ cần cung cấp thông tin về sản phẩm mình muốn
          mua, mọi công việc còn lại đã có AD Logistic lo.
        </p>
        <H3>3. Giá cả cạnh tranh và minh bạch</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cam kết mang đến dịch vụ với giá cả cạnh tranh nhất. Chúng
          tôi luôn minh bạch trong mọi chi phí, không phát sinh chi phí ẩn, giúp
          quý khách dễ dàng quản lý ngân sách và yên tâm mua sắm.
        </p>
        <H3>4. An toàn và đảm bảo</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi đảm bảo mọi giao dịch mua hàng được thực hiện an toàn, bảo
          mật thông tin khách hàng. Hàng hóa của quý khách được đóng gói cẩn
          thận và vận chuyển an toàn, đảm bảo đến tay quý khách trong tình trạng
          tốt nhất.
        </p>
        <H3>5. Hỗ trợ khách hàng tận tâm</H3>
        <p className="mb-3 text-sm md:text-base">
          Đội ngũ nhân viên của AD Logistic luôn sẵn sàng hỗ trợ quý khách 24/7.
          Chúng tôi cam kết giải đáp mọi thắc mắc và xử lý kịp thời các vấn đề
          phát sinh, mang đến cho quý khách trải nghiệm dịch vụ hoàn hảo.
        </p>
        <H2>Quy trình dịch vụ mua hàng hộ của AD Logistic</H2>
        <H3>Bước 1: Yêu cầu mua hàng</H3>
        <p className="mb-3 text-sm md:text-base">
          Quý khách chỉ cần gửi yêu cầu mua hàng qua website hoặc liên hệ trực
          tiếp với chúng tôi. Cung cấp thông tin chi tiết về sản phẩm và nguồn
          cung cấp, chúng tôi sẽ kiểm tra và xác nhận yêu cầu của quý khách.
        </p>
        <H3>Bước 2: Tư vấn và báo giá</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi sẽ tư vấn chi tiết về sản phẩm, cung cấp thông tin về giá
          cả, chi phí vận chuyển và thời gian giao hàng. Sau khi quý khách đồng
          ý, chúng tôi sẽ tiến hành đặt hàng.
        </p>
        <H3>Bước 3: Đặt hàng và thanh toán</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic sẽ thực hiện các thủ tục mua hàng, thanh toán và đảm bảo
          giao dịch an toàn. Quý khách chỉ cần thanh toán chi phí dịch vụ theo
          thỏa thuận.
        </p>
        <H3>Bước 4: Vận chuyển và theo dõi</H3>
        <p className="mb-3 text-sm md:text-base">
          Chúng tôi tiến hành vận chuyển hàng hóa về Việt Nam, quý khách có thể
          theo dõi tình trạng đơn hàng qua hệ thống tracking trực tuyến của
          chúng tôi.
        </p>
        <H3>Bước 5: Giao hàng tận nơi</H3>
        <p className="mb-3 text-sm md:text-base">
          Sau khi hàng hóa về đến Việt Nam, chúng tôi sẽ thông báo và giao hàng
          tận nơi cho quý khách. Quý khách kiểm tra và xác nhận tình trạng hàng
          hóa khi nhận.
        </p>
        <H3>Cam kết của chúng tôi</H3>
        <p className="mb-3 text-sm md:text-base">
          AD Logistic cam kết mang đến dịch vụ mua hàng hộ chuyên nghiệp, an
          toàn và hiệu quả. Chúng tôi không ngừng nỗ lực cải tiến và nâng cao
          chất lượng dịch vụ, đảm bảo mang lại sự hài lòng tối đa cho quý khách
          hàng. Hãy để AD Logistic trở thành đối tác tin cậy trong hành trình
          mua sắm quốc tế của bạn.
        </p>
      </div>
    ),
  },
};


export default function ServicePage({
    slug,
  }: {
    slug: "delivery" | "fulfillment" | "warehouse" | "order";
  }) {
    const isMobile = useMobile()
    return (
      <div>
        <img
          src={isMobile ? "/assets/images/bg_service_mobile.jpg" : "/assets/images/bg_services.jpg"}
          alt="Banner Service"
          className="w-full"
        />
        <div className="mx-auto md:max-w-screen-xl">
          <div className="my-5 md:py-10 px-4 md:px-0">
            <h1 className="text-center text-xl md:text-3xl font-black">
              {content[slug]?.title}
            </h1>
            <div className="mt-5">{content[slug]?.description}</div>
            <p className="mt-10 font-semibold">
              Liên hệ ngay với chúng tôi để nhận được tư vấn và báo giá chi tiết.
              AD Logistic - Đồng hành cùng thành công của bạn!
            </p>
          </div>
        </div>
      </div>
    );
  }