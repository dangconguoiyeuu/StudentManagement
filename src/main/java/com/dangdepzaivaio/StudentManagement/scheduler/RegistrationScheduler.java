package com.dangdepzaivaio.StudentManagement.scheduler;

import com.dangdepzaivaio.StudentManagement.entity.RegistrationPeriod;
import com.dangdepzaivaio.StudentManagement.repository.RegistrationPeriodRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class RegistrationScheduler {

    private final RegistrationPeriodRepository periodRepository;

    /**
     * 🔥 HÀM CHẠY TỰ ĐỘNG: Quét Database định kỳ để đóng các cổng đăng ký tín chỉ quá hạn
     * fixedDelay = 60000 nghĩa là cứ sau 60 giây (1 phút) hệ thống sẽ tự quét 1 lần.
     */
    @Scheduled(fixedDelay = 60000)
    @Transactional
    public void autoCloseExpiredPeriods() {
        LocalDateTime now = LocalDateTime.now();

        // Lấy toàn bộ các đợt đăng ký đang bật trạng thái active = true
        List<RegistrationPeriod> activePeriods = periodRepository.findAllByIsActiveTrue();

        for (RegistrationPeriod period : activePeriods) {
            // So sánh: Nếu mốc endTime nằm ở quá khứ (nhỏ hơn thời gian hiện tại) -> Đã hết giờ!
            if (period.getEndTime() != null && period.getEndTime().isBefore(now)) {

                period.setIsActive(false); // Chuyển trạng thái hoạt động về false (Đóng cổng)
                periodRepository.save(period);

                // Ghi vết nhật ký ra Console của IntelliJ để giám sát vận hành
                log.info("⏰ [HỆ THỐNG TỰ ĐỘNG] Đã chốt sổ, hủy kích hoạt đợt đăng ký tín chỉ quá hạn của học kỳ: {}", period.getSemester());
            }
        }
    }
}