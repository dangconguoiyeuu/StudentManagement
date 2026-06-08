package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.SubjectMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.SubjectRepository;
import com.dangdepzaivaio.StudentManagement.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final SubjectMapper subjectMapper;
    private final CourseClassRepository courseClassRepository;

    @Override
    @Transactional
    public SubjectResponse createSubject(SubjectRequest request) {
        if (subjectRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.SUBJECT_EXISTED);
        }
        Subject subject = subjectMapper.toEntity(request);
        return subjectMapper.toResponse(subjectRepository.save(subject)); // Đã bọc Response
    }

    @Override
    public List<SubjectResponse> getAllSubjects() {
        return subjectRepository.findAll().stream()
                .map(subjectMapper::toResponse) // Map toàn bộ danh sách sang DTO
                .toList();
    }

    @Override
    public SubjectResponse getSubjectById(Long id) {
        return subjectRepository.findById(id)
                .map(subjectMapper::toResponse) // Ánh xạ trực tiếp
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));
    }

    @Override
    @Transactional
    public SubjectResponse updateSubject(Long id, SubjectRequest request) {
        // Tận dụng hàm tìm kiếm thực thể gốc để xử lý
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        // Kiểm tra nếu đổi sang mã môn mới, mã đó có bị trùng với môn khác không
        if (!subject.getCode().equals(request.code()) && subjectRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.SUBJECT_EXISTED);
        }

        subjectMapper.updateEntityFromRequest(request, subject);
        return subjectMapper.toResponse(subjectRepository.save(subject)); // Đã bọc Response
    }

    @Override
    @Transactional
    public void deleteSubject(Long id) {
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));
        if (courseClassRepository.existsBySubjectId(id)) {
            throw new AppException(ErrorCode.SUBJECT_HAS_CLASSES);
        }
        subjectRepository.delete(subject);
    }
}