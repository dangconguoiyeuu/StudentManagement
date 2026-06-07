This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.gitattributes
.gitignore
.mvn/wrapper/maven-wrapper.properties
mvnw
mvnw.cmd
pom.xml
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ApiResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/BaseEntity.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Class.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/CourseClass.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Department.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Grade.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Role.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Student.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Subject.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/User.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/AppException.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/ErrorCode.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/GlobalExceptionHandler.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/README.md
src/main/java/com/dangdepzaivaio/StudentManagement/repository/ClassRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/CourseClassRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/DepartmentRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/GradeRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/RoleRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/StudentRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/SubjectRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/UserRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/StudentServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/UserServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/UserService.java
src/main/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplication.java
src/main/resources/application.yaml
src/test/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplicationTests.java
StudentManagement.docx
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.service.StudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @PostMapping
    public ApiResponse<Student> createStudent(@RequestBody @Valid StudentCreationRequest request) {
        Student student = studentService.createStudent(request);
        return new ApiResponse<>(1000, "Tạo hồ sơ sinh viên thành công!", student);
    }

    // 1. API GET: Lấy toàn bộ danh sách sinh viên
    @GetMapping
    public ApiResponse<List<Student>> getAllStudents() {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents());
    }

    // 2. API GET: Lấy chi tiết 1 sinh viên theo ID
    @GetMapping("/{studentId}")
    public ApiResponse<Student> getStudent(@PathVariable Long studentId) {
        return new ApiResponse<>(1000, "Lấy chi tiết sinh viên thành công!", studentService.getStudentById(studentId));
    }

    // 3. API PUT: Cập nhật thông tin lý lịch sinh viên
    @PutMapping("/{studentId}")
    public ApiResponse<Student> updateStudent(@PathVariable Long studentId, @RequestBody @Valid StudentUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin sinh viên thành công!", studentService.updateStudent(studentId, request));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentUpdateRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

public record StudentUpdateRequest(
        @NotBlank(message = "Tên sinh viên không được để trống")
        String firstName,

        @NotBlank(message = "Họ và tên đệm không được để trống")
        String lastName,

        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        Long classId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/StudentServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.StudentMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;
    private final ClassRepository classRepository;
    private final RoleRepository roleRepository;
    private final StudentMapper studentMapper;

    @Override
    @Transactional // Đảm bảo đồng bộ dữ liệu giữa bảng Users và Students
    public Student createStudent(StudentCreationRequest request) {

        // 1. Kiểm tra Mã sinh viên đã tồn tại chưa
        if (studentRepository.existsByStudentCode(request.studentCode())) {
            throw new RuntimeException("Mã sinh viên này đã tồn tại trên hệ thống!");
        }

        // 2. Kiểm tra Tài khoản đăng nhập đã tồn tại chưa
        if (userRepository.existsByUsername(request.user().username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        if (userRepository.existsByEmail(request.user().email())) {
            throw new AppException(ErrorCode.EMAIL_EXISTED);
        }

        // 3. Kiểm tra Lớp hành chính có tồn tại không
        Class studentClass = classRepository.findById(request.classId())
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        // 4. Khởi tạo tài khoản User hệ thống đi kèm hồ sơ sinh viên
        User user = studentMapper.toUserEntity(request.user());

        // Lấy vai trò STUDENT mặc định đã được khởi tạo từ DatabaseInitializer
        Role studentRole = roleRepository.findByName("STUDENT")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(studentRole));
        userRepository.save(user);

        // 5. Khởi tạo thực thể Student và liên kết mối quan hệ
        Student student = studentMapper.toEntity(request);
        student.setUser(user); // Gán quan hệ @OneToOne
        student.setStudentClass(studentClass); // Gán quan hệ @ManyToOne

        // 6. Lưu hồ sơ sinh viên hoàn chỉnh vào Database
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND)); // Đã có sẵn mã lỗi 1003
    }

    @Override
    @Transactional
    public Student updateStudent(Long id, StudentUpdateRequest request) {
        Student student = getStudentById(id); // Lấy hồ sơ cũ ra

        // Nếu thay đổi lớp hành chính, cần kiểm tra lớp mới có tồn tại không
        if (request.classId() != null) {
            Class studentClass = classRepository.findById(request.classId())
                    .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));
            student.setStudentClass(studentClass);
        }

        // Cập nhật các thông tin lý lịch sinh viên
        student.setFirstName(request.firstName());
        student.setLastName(request.lastName());
        student.setDateOfBirth(request.dateOfBirth());
        student.setGender(request.gender());
        student.setPhoneNumber(request.phoneNumber());

        return studentRepository.save(student);
    }

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import java.util.List;

public interface StudentService {
    Student createStudent(StudentCreationRequest request);
    List<Student> getAllStudents();
    Student getStudentById(Long id);
    Student updateStudent(Long id, StudentUpdateRequest request);
}
</file>

<file path=".gitattributes">
/mvnw text eol=lf
*.cmd text eol=crlf
</file>

<file path=".gitignore">
HELP.md
target/
.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/
</file>

<file path=".mvn/wrapper/maven-wrapper.properties">
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.16/apache-maven-3.9.16-bin.zip
</file>

<file path="mvnw">
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Apache Maven Wrapper startup batch script, version 3.3.4
#
# Optional ENV vars
# -----------------
#   JAVA_HOME - location of a JDK home dir, required when download maven via java source
#   MVNW_REPOURL - repo url base for downloading maven distribution
#   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
#   MVNW_VERBOSE - true: enable verbose log; debug: trace the mvnw script; others: silence the output
# ----------------------------------------------------------------------------

set -euf
[ "${MVNW_VERBOSE-}" != debug ] || set -x

# OS specific support.
native_path() { printf %s\\n "$1"; }
case "$(uname)" in
CYGWIN* | MINGW*)
  [ -z "${JAVA_HOME-}" ] || JAVA_HOME="$(cygpath --unix "$JAVA_HOME")"
  native_path() { cygpath --path --windows "$1"; }
  ;;
esac

# set JAVACMD and JAVACCMD
set_java_home() {
  # For Cygwin and MinGW, ensure paths are in Unix format before anything is touched
  if [ -n "${JAVA_HOME-}" ]; then
    if [ -x "$JAVA_HOME/jre/sh/java" ]; then
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD="$JAVA_HOME/jre/sh/java"
      JAVACCMD="$JAVA_HOME/jre/sh/javac"
    else
      JAVACMD="$JAVA_HOME/bin/java"
      JAVACCMD="$JAVA_HOME/bin/javac"

      if [ ! -x "$JAVACMD" ] || [ ! -x "$JAVACCMD" ]; then
        echo "The JAVA_HOME environment variable is not defined correctly, so mvnw cannot run." >&2
        echo "JAVA_HOME is set to \"$JAVA_HOME\", but \"\$JAVA_HOME/bin/java\" or \"\$JAVA_HOME/bin/javac\" does not exist." >&2
        return 1
      fi
    fi
  else
    JAVACMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v java
    )" || :
    JAVACCMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v javac
    )" || :

    if [ ! -x "${JAVACMD-}" ] || [ ! -x "${JAVACCMD-}" ]; then
      echo "The java/javac command does not exist in PATH nor is JAVA_HOME set, so mvnw cannot run." >&2
      return 1
    fi
  fi
}

# hash string like Java String::hashCode
hash_string() {
  str="${1:-}" h=0
  while [ -n "$str" ]; do
    char="${str%"${str#?}"}"
    h=$(((h * 31 + $(LC_CTYPE=C printf %d "'$char")) % 4294967296))
    str="${str#?}"
  done
  printf %x\\n $h
}

verbose() { :; }
[ "${MVNW_VERBOSE-}" != true ] || verbose() { printf %s\\n "${1-}"; }

die() {
  printf %s\\n "$1" >&2
  exit 1
}

trim() {
  # MWRAPPER-139:
  #   Trims trailing and leading whitespace, carriage returns, tabs, and linefeeds.
  #   Needed for removing poorly interpreted newline sequences when running in more
  #   exotic environments such as mingw bash on Windows.
  printf "%s" "${1}" | tr -d '[:space:]'
}

scriptDir="$(dirname "$0")"
scriptName="$(basename "$0")"

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"$scriptDir/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"

case "${distributionUrl##*/}" in
maven-mvnd-*bin.*)
  MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/
  case "${PROCESSOR_ARCHITECTURE-}${PROCESSOR_ARCHITEW6432-}:$(uname -a)" in
  *AMD64:CYGWIN* | *AMD64:MINGW*) distributionPlatform=windows-amd64 ;;
  :Darwin*x86_64) distributionPlatform=darwin-amd64 ;;
  :Darwin*arm64) distributionPlatform=darwin-aarch64 ;;
  :Linux*x86_64*) distributionPlatform=linux-amd64 ;;
  *)
    echo "Cannot detect native platform for mvnd on $(uname)-$(uname -m), use pure java version" >&2
    distributionPlatform=linux-amd64
    ;;
  esac
  distributionUrl="${distributionUrl%-bin.*}-$distributionPlatform.zip"
  ;;
maven-mvnd-*) MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/ ;;
*) MVN_CMD="mvn${scriptName#mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
esac

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
[ -z "${MVNW_REPOURL-}" ] || distributionUrl="$MVNW_REPOURL$_MVNW_REPO_PATTERN${distributionUrl#*"$_MVNW_REPO_PATTERN"}"
distributionUrlName="${distributionUrl##*/}"
distributionUrlNameMain="${distributionUrlName%.*}"
distributionUrlNameMain="${distributionUrlNameMain%-bin}"
MAVEN_USER_HOME="${MAVEN_USER_HOME:-${HOME}/.m2}"
MAVEN_HOME="${MAVEN_USER_HOME}/wrapper/dists/${distributionUrlNameMain-}/$(hash_string "$distributionUrl")"

exec_maven() {
  unset MVNW_VERBOSE MVNW_USERNAME MVNW_PASSWORD MVNW_REPOURL || :
  exec "$MAVEN_HOME/bin/$MVN_CMD" "$@" || die "cannot exec $MAVEN_HOME/bin/$MVN_CMD"
}

if [ -d "$MAVEN_HOME" ]; then
  verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  exec_maven "$@"
fi

case "${distributionUrl-}" in
*?-bin.zip | *?maven-mvnd-?*-?*.zip) ;;
*) die "distributionUrl is not valid, must match *-bin.zip or maven-mvnd-*.zip, but found '${distributionUrl-}'" ;;
esac

# prepare tmp dir
if TMP_DOWNLOAD_DIR="$(mktemp -d)" && [ -d "$TMP_DOWNLOAD_DIR" ]; then
  clean() { rm -rf -- "$TMP_DOWNLOAD_DIR"; }
  trap clean HUP INT TERM EXIT
else
  die "cannot create temp dir"
fi

mkdir -p -- "${MAVEN_HOME%/*}"

# Download and Install Apache Maven
verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
verbose "Downloading from: $distributionUrl"
verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

# select .zip or .tar.gz
if ! command -v unzip >/dev/null; then
  distributionUrl="${distributionUrl%.zip}.tar.gz"
  distributionUrlName="${distributionUrl##*/}"
fi

# verbose opt
__MVNW_QUIET_WGET=--quiet __MVNW_QUIET_CURL=--silent __MVNW_QUIET_UNZIP=-q __MVNW_QUIET_TAR=''
[ "${MVNW_VERBOSE-}" != true ] || __MVNW_QUIET_WGET='' __MVNW_QUIET_CURL='' __MVNW_QUIET_UNZIP='' __MVNW_QUIET_TAR=v

# normalize http auth
case "${MVNW_PASSWORD:+has-password}" in
'') MVNW_USERNAME='' MVNW_PASSWORD='' ;;
has-password) [ -n "${MVNW_USERNAME-}" ] || MVNW_USERNAME='' MVNW_PASSWORD='' ;;
esac

if [ -z "${MVNW_USERNAME-}" ] && command -v wget >/dev/null; then
  verbose "Found wget ... using wget"
  wget ${__MVNW_QUIET_WGET:+"$__MVNW_QUIET_WGET"} "$distributionUrl" -O "$TMP_DOWNLOAD_DIR/$distributionUrlName" || die "wget: Failed to fetch $distributionUrl"
elif [ -z "${MVNW_USERNAME-}" ] && command -v curl >/dev/null; then
  verbose "Found curl ... using curl"
  curl ${__MVNW_QUIET_CURL:+"$__MVNW_QUIET_CURL"} -f -L -o "$TMP_DOWNLOAD_DIR/$distributionUrlName" "$distributionUrl" || die "curl: Failed to fetch $distributionUrl"
elif set_java_home; then
  verbose "Falling back to use Java to download"
  javaSource="$TMP_DOWNLOAD_DIR/Downloader.java"
  targetZip="$TMP_DOWNLOAD_DIR/$distributionUrlName"
  cat >"$javaSource" <<-END
	public class Downloader extends java.net.Authenticator
	{
	  protected java.net.PasswordAuthentication getPasswordAuthentication()
	  {
	    return new java.net.PasswordAuthentication( System.getenv( "MVNW_USERNAME" ), System.getenv( "MVNW_PASSWORD" ).toCharArray() );
	  }
	  public static void main( String[] args ) throws Exception
	  {
	    setDefault( new Downloader() );
	    java.nio.file.Files.copy( java.net.URI.create( args[0] ).toURL().openStream(), java.nio.file.Paths.get( args[1] ).toAbsolutePath().normalize() );
	  }
	}
	END
  # For Cygwin/MinGW, switch paths to Windows format before running javac and java
  verbose " - Compiling Downloader.java ..."
  "$(native_path "$JAVACCMD")" "$(native_path "$javaSource")" || die "Failed to compile Downloader.java"
  verbose " - Running Downloader.java ..."
  "$(native_path "$JAVACMD")" -cp "$(native_path "$TMP_DOWNLOAD_DIR")" Downloader "$distributionUrl" "$(native_path "$targetZip")"
fi

# If specified, validate the SHA-256 sum of the Maven distribution zip file
if [ -n "${distributionSha256Sum-}" ]; then
  distributionSha256Result=false
  if [ "$MVN_CMD" = mvnd.sh ]; then
    echo "Checksum validation is not supported for maven-mvnd." >&2
    echo "Please disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  elif command -v sha256sum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c - >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  elif command -v shasum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | shasum -a 256 -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  else
    echo "Checksum validation was requested but neither 'sha256sum' or 'shasum' are available." >&2
    echo "Please install either command, or disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  fi
  if [ $distributionSha256Result = false ]; then
    echo "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised." >&2
    echo "If you updated your Maven version, you need to update the specified distributionSha256Sum property." >&2
    exit 1
  fi
fi

# unzip and move
if command -v unzip >/dev/null; then
  unzip ${__MVNW_QUIET_UNZIP:+"$__MVNW_QUIET_UNZIP"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -d "$TMP_DOWNLOAD_DIR" || die "failed to unzip"
else
  tar xzf${__MVNW_QUIET_TAR:+"$__MVNW_QUIET_TAR"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -C "$TMP_DOWNLOAD_DIR" || die "failed to untar"
fi

# Find the actual extracted directory name (handles snapshots where filename != directory name)
actualDistributionDir=""

# First try the expected directory name (for regular distributions)
if [ -d "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" ]; then
  if [ -f "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/bin/$MVN_CMD" ]; then
    actualDistributionDir="$distributionUrlNameMain"
  fi
fi

# If not found, search for any directory with the Maven executable (for snapshots)
if [ -z "$actualDistributionDir" ]; then
  # enable globbing to iterate over items
  set +f
  for dir in "$TMP_DOWNLOAD_DIR"/*; do
    if [ -d "$dir" ]; then
      if [ -f "$dir/bin/$MVN_CMD" ]; then
        actualDistributionDir="$(basename "$dir")"
        break
      fi
    fi
  done
  set -f
fi

if [ -z "$actualDistributionDir" ]; then
  verbose "Contents of $TMP_DOWNLOAD_DIR:"
  verbose "$(ls -la "$TMP_DOWNLOAD_DIR")"
  die "Could not find Maven distribution directory in extracted archive"
fi

verbose "Found extracted Maven distribution directory: $actualDistributionDir"
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$actualDistributionDir/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$actualDistributionDir" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

clean || :
exec_maven "$@"
</file>

<file path="mvnw.cmd">
<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.4
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__=
@SET __MVNW_ERROR__=
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath=
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile "& {$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope}"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE=
@SET __MVNW_ARG0_NAME__=
@SET MVNW_USERNAME=
@SET MVNW_PASSWORD=
@IF NOT "%__MVNW_CMD__%"=="" ("%__MVNW_CMD__%" %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>

$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") {
  $VerbosePreference = "Continue"
}

# calculate distributionUrl, requires .mvn/wrapper/maven-wrapper.properties
$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) {
  Write-Error "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"
}

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = $script -replace '^mvnw','mvn'
    break
  }
}

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
if ($env:MVNW_REPOURL) {
  $MVNW_REPO_PATTERN = if ($USE_MVND -eq $False) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace "^.*$MVNW_REPO_PATTERN",'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''

$MAVEN_M2_PATH = "$HOME/.m2"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_M2_PATH = "$env:MAVEN_USER_HOME"
}

if (-not (Test-Path -Path $MAVEN_M2_PATH)) {
    New-Item -Path $MAVEN_M2_PATH -ItemType Directory | Out-Null
}

$MAVEN_WRAPPER_DISTS = $null
if ((Get-Item $MAVEN_M2_PATH).Target[0] -eq $null) {
  $MAVEN_WRAPPER_DISTS = "$MAVEN_M2_PATH/wrapper/dists"
} else {
  $MAVEN_WRAPPER_DISTS = (Get-Item $MAVEN_M2_PATH).Target[0] + "/wrapper/dists"
}

$MAVEN_HOME_PARENT = "$MAVEN_WRAPPER_DISTS/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.SHA256]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

if (! $distributionUrlNameMain -or ($distributionUrlName -eq $distributionUrlNameMain)) {
  Write-Error "distributionUrl is not valid, must end with *-bin.zip, but found $distributionUrl"
}

# prepare tmp dir
$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null
trap {
  if ($TMP_DOWNLOAD_DIR.Exists) {
    try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
    catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
  }
}

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

# Download and Install Apache Maven
Write-Verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
Write-Verbose "Downloading from: $distributionUrl"
Write-Verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

$webclient = New-Object System.Net.WebClient
if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
  $webclient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

# If specified, validate the SHA-256 sum of the Maven distribution zip file
$distributionSha256Sum = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionSha256Sum
if ($distributionSha256Sum) {
  if ($USE_MVND) {
    Write-Error "Checksum validation is not supported for maven-mvnd. `nPlease disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties."
  }
  Import-Module $PSHOME\Modules\Microsoft.PowerShell.Utility -Function Get-FileHash
  if ((Get-FileHash "$TMP_DOWNLOAD_DIR/$distributionUrlName" -Algorithm SHA256).Hash.ToLower() -ne $distributionSha256Sum) {
    Write-Error "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised. If you updated your Maven version, you need to update the specified distributionSha256Sum property."
  }
}

# unzip and move
Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null

# Find the actual extracted directory name (handles snapshots where filename != directory name)
$actualDistributionDir = ""

# First try the expected directory name (for regular distributions)
$expectedPath = Join-Path "$TMP_DOWNLOAD_DIR" "$distributionUrlNameMain"
$expectedMvnPath = Join-Path "$expectedPath" "bin/$MVN_CMD"
if ((Test-Path -Path $expectedPath -PathType Container) -and (Test-Path -Path $expectedMvnPath -PathType Leaf)) {
  $actualDistributionDir = $distributionUrlNameMain
}

# If not found, search for any directory with the Maven executable (for snapshots)
if (!$actualDistributionDir) {
  Get-ChildItem -Path "$TMP_DOWNLOAD_DIR" -Directory | ForEach-Object {
    $testPath = Join-Path $_.FullName "bin/$MVN_CMD"
    if (Test-Path -Path $testPath -PathType Leaf) {
      $actualDistributionDir = $_.Name
    }
  }
}

if (!$actualDistributionDir) {
  Write-Error "Could not find Maven distribution directory in extracted archive"
}

Write-Verbose "Found extracted Maven distribution directory: $actualDistributionDir"
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$actualDistributionDir" -NewName $MAVEN_HOME_NAME | Out-Null
try {
  Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
} catch {
  if (! (Test-Path -Path "$MAVEN_HOME" -PathType Container)) {
    Write-Error "fail to move MAVEN_HOME"
  }
} finally {
  try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
  catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
}

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer {

    private final RoleRepository roleRepository;

    @Bean
    ApplicationRunner initRoles() {
        return args -> {
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
                log.info("Đã tạo Role ADMIN thành công!");
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
                log.info("Đã tạo Role STUDENT thành công!");
            }
        };
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest; // Thêm import này
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Thêm import này

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ApiResponse<User> createUser(@RequestBody @Valid UserCreationRequest request) {
        User user = userService.createUser(request);
        return new ApiResponse<>(1000, "Tạo người dùng thành công", user);
    }

    // 1. API GET: Lấy danh sách toàn bộ người dùng
    @GetMapping
    public ApiResponse<List<User>> getAllUsers() {
        return new ApiResponse<>(1000, "Lấy danh sách thành công", userService.getAllUsers());
    }

    // 2. API GET: Lấy thông tin chi tiết 1 người dùng theo ID
    @GetMapping("/{userId}")
    public ApiResponse<User> getUser(@PathVariable Long userId) {
        return new ApiResponse<>(1000, "Lấy chi tiết người dùng thành công", userService.getUserById(userId));
    }

    // 3. API PUT: Cập nhật thông tin người dùng theo ID
    @PutMapping("/{userId}")
    public ApiResponse<User> updateUser(@PathVariable Long userId, @RequestBody @Valid UserUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin thành công", userService.updateUser(userId, request));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

public record StudentCreationRequest(
        @NotBlank(message = "Mã sinh viên không được để trống")
        @Size(max = 20, message = "Mã sinh viên không vượt quá 20 ký tự")
        String studentCode,

        @NotBlank(message = "Tên sinh viên không được để trống")
        String firstName,

        @NotBlank(message = "Họ và tên đệm không được để trống")
        String lastName,

        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,

        @NotNull(message = "ID lớp hành chính không được để trống")
        Long classId,

        @Valid // Quan trọng: Để kích hoạt validation cho đối tượng bên trong
        @NotNull(message = "Thông tin tài khoản không được để trống")
        UserCreationRequest user
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserCreationRequest(
        @NotBlank(message = "Tên đăng nhập không được để trống")
        @Size(min = 4, max = 50, message = "Tên đăng nhập phải từ 4 đến 50 ký tự")
        String username,

        @NotBlank(message = "Mật khẩu không được để trống")
        @Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự")
        String password,

        @NotBlank(message = "Email không được để trống")
        @Email(message = "Định dạng email không hợp lệ")
        String email
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserUpdateRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UserUpdateRequest(
        @Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự")
        String password,

        @Email(message = "Định dạng email không hợp lệ")
        String email
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ApiResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL) // Những trường có giá trị null sẽ được tự động ẩn khỏi JSON trả về
public record ApiResponse<T>(
        int code,         // Mã code nội bộ tự định nghĩa (Ví dụ: 1000 là thành công, 4000 là lỗi validation)
        String message,   // Thông điệp trả về cho Client
        T result          // Dữ liệu thực tế trả về (Có thể là Object sinh viên, List hoặc null nếu lỗi)
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/BaseEntity.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass // Quan trọng: Đánh dấu đây là class cha để các thực thể khác kế thừa
@EntityListeners(AuditingEntityListener.class) // Tự động cập nhật thời gian
public abstract class BaseEntity {

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Class.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "classes")
public class Class extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, unique = true, length = 50)
    private String name; // Ví dụ: D21CNPM1, D22HTTT2

    // Mối quan hệ: Nhiều lớp thuộc về một Khoa
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/CourseClass.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "course_classes")
public class CourseClass extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 30)
    private String code; // Mã lớp học phần (Ví dụ: INT3110_01)

    @Column(name = "semester", nullable = false, length = 20)
    private String semester; // Học kỳ (Ví dụ: HK1-2026)

    // Nhiều lớp học phần thuộc về một Môn học gốc
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Department.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "departments")
public class Department extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 20)
    private String code; // Ví dụ: CNTT, ĐTVT, kttc

    @Column(name = "name", nullable = false, unique = true)
    private String name; // Ví dụ: Công nghệ thông tin
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Grade.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "grades", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"student_id", "course_class_id"}) // Một SV chỉ có 1 dòng điểm trong 1 lớp học phần
})
public class Grade extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Nhiều dòng điểm thuộc về một Sinh viên
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    // Nhiều dòng điểm thuộc về một Lớp học phần
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_class_id", nullable = false)
    private CourseClass courseClass;

    @Column(name = "attendance_grade")
    private Double attendanceGrade; // Điểm chuyên cần

    @Column(name = "midterm_grade")
    private Double midtermGrade; // Điểm giữa kỳ

    @Column(name = "final_grade")
    private Double finalGrade; // Điểm cuối kỳ

    @Column(name = "overall_grade")
    private Double overallGrade; // Điểm tổng kết hệ 10

    @Column(name = "letter_grade", length = 5)
    private String letterGrade; // Điểm chữ (A, B+, B, C...)
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Role.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "roles")
public class Role extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name; // Ví dụ: ADMIN, TEACHER, STUDENT
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Student.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "students")
public class Student extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_code", nullable = false, unique = true, length = 20)
    private String studentCode; // Mã sinh viên (Ví dụ: B21DCCN001)

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName; // Tên (Ví dụ: Anh)

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName; // Họ và đệm (Ví dụ: Nguyễn Đình)

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "phone_number", length = 15)
    private String phoneNumber;

    // Mỗi sinh viên sở hữu duy nhất 1 tài khoản hệ thống
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    // Nhiều sinh viên học chung 1 lớp hành chính
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "class_id", nullable = false)
    private Class studentClass;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Subject.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "subjects")
public class Subject extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 20)
    private String code; // Ví dụ: THVP01, INT3110

    @Column(name = "name", nullable = false, length = 150)
    private String name; // Ví dụ: Lập trình Spring Boot

    @Column(name = "credits", nullable = false)
    private Integer credits; // Số tín chỉ (Ví dụ: 3)
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/User.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    // Quan hệ nhiều-nhiều: Một user có thể có nhiều role, một role có nhiều user
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/AppException.java">
package com.dangdepzaivaio.StudentManagement.exception;

import lombok.Getter;

@Getter
public class AppException extends RuntimeException {
    private final ErrorCode errorCode;

    public AppException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/ErrorCode.java">
package com.dangdepzaivaio.StudentManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import lombok.Getter;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Lỗi hệ thống không xác định", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXISTED(1001, "Tài khoản đăng nhập đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    ROLE_NOT_FOUND(1002, "Vai trò người dùng (Role) không tồn tại", HttpStatus.NOT_FOUND),
    STUDENT_NOT_FOUND(1003, "Không tìm thấy thông tin sinh viên yêu cầu", HttpStatus.NOT_FOUND),
    CLASS_NOT_FOUND(1004, "Lớp hành chính không tồn tại trên hệ thống", HttpStatus.NOT_FOUND),
    VALIDATION_ERROR(4000, "Dữ liệu đầu vào không hợp lệ", HttpStatus.BAD_REQUEST),
    EMAIL_EXISTED(1005, "Email này đã được sử dụng trên hệ thống", HttpStatus.BAD_REQUEST)
    ;

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode; // Lưu mã HTTP Status chuẩn (200, 400, 404, 500)

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "studentClass", ignore = true)
    @Mapping(target = "user", source = "user")
    Student toEntity(StudentCreationRequest request);

    // BỔ SUNG THÊM HÀM NÀY: Để MapStruct tự xử lý chuyển đổi thực thể User lồng bên trong
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "roles", ignore = true)
    User toUserEntity(UserCreationRequest request);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/ClassRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    List<Class> findByDepartmentId(Long departmentId);
    boolean existsByName(String name);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/CourseClassRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CourseClassRepository extends JpaRepository<CourseClass, Long> {
    List<CourseClass> findBySemester(String semester);
    boolean existsByCode(String code);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/DepartmentRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    boolean existsByCode(String code);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/GradeRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    // Tìm kiếm toàn bộ điểm số của một sinh viên dựa vào ID
    List<Grade> findByStudentId(Long studentId);

    // Tìm kiếm điểm số của một lớp học phần
    List<Grade> findByCourseClassId(Long courseClassId);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/RoleRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/StudentRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByStudentCode(String studentCode);
    boolean existsByStudentCode(String studentCode);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/SubjectRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    boolean existsByCode(String code);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/UserRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/UserServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import java.util.List;
import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor // Tự động inject các repository qua Constructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User createUser(UserCreationRequest request) {
        // 1. Kiểm tra username đã tồn tại chưa
        if (userRepository.existsByUsername(request.username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        // 2. Map từ DTO sang Entity (Tạm thời thủ công, sau này dùng Mapper)
        User user = User.builder()
                .username(request.username())
                .password(request.password()) // Sẽ mã hóa sau khi làm Security
                .email(request.email())
                .build();

        // 3. Lưu vào database
        return userRepository.save(user);
    }
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng này"));
        // Sau này bạn có thể thêm mã lỗi USER_NOT_FOUND vào ErrorCode nhé!
    }

    @Override
    public User updateUser(Long id, UserUpdateRequest request) {
        User user = getUserById(id); // Lấy user cũ ra trước

        // Cập nhật thông tin nếu có truyền vào
        if (request.password() != null && !request.password().isBlank()) {
            user.setPassword(request.password());
        }
        if (request.email() != null && !request.email().isBlank()) {
            user.setEmail(request.email());
        }

        return userRepository.save(user); // Lưu lại bản cập nhật
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/UserService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.entity.User;

import java.util.List;

public interface UserService {
    User createUser(UserCreationRequest request);

    List<User> getAllUsers(); // Đã xóa chữ "java" thừa ở đây
    User getUserById(Long id);
    User updateUser(Long id, UserUpdateRequest request);
}
</file>

<file path="src/test/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplicationTests.java">
package com.dangdepzaivaio.StudentManagement;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class StudentManagementApplicationTests {

	@Test
	void contextLoads() {
	}

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/GlobalExceptionHandler.java">
package com.dangdepzaivaio.StudentManagement.exception;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // 1. Bắt toàn bộ các lỗi Runtime không xác định (Tránh làm lộ log hệ thống ra ngoài)
    // 1. Bắt toàn bộ các lỗi Runtime không xác định và trả thẳng tên lỗi ra Postman
    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ApiResponse<Object>> handlingRuntimeException(Exception exception) {

        // Tạo câu thông báo chi tiết: Lấy tên Class của lỗi + Tin nhắn lỗi gốc
        String detailedMessage = exception.getClass().getSimpleName() + " -> " + exception.getMessage();

        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.UNCATEGORIZED_EXCEPTION.getCode(),
                detailedMessage, // Trả thẳng câu này ra ngoài Postman thay vì câu "Lỗi hệ thống không xác định"
                null
        );
        return ResponseEntity.status(ErrorCode.UNCATEGORIZED_EXCEPTION.getStatusCode()).body(apiResponse);
    }

    // 2. Bắt lỗi nghiệp vụ hệ thống do chúng ta chủ động throw (AppException)
    @ExceptionHandler(value = AppException.class)
    public ResponseEntity<ApiResponse<Object>> handlingAppException(AppException exception) {
        ErrorCode errorCode = exception.getErrorCode();
        ApiResponse<Object> apiResponse = new ApiResponse<>(
                errorCode.getCode(),
                errorCode.getMessage(),
                null
        );
        return ResponseEntity.status(errorCode.getStatusCode()).body(apiResponse);
    }

    // 3. Bắt toàn bộ lỗi Validation đầu vào từ DTO Records (@NotBlank, @Size, @Email)
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Object>> handlingValidation(MethodArgumentNotValidException exception) {
        String defaultMessage = exception.getFieldError().getDefaultMessage();

        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.VALIDATION_ERROR.getCode(),
                defaultMessage, // Trả ra chính xác câu thông báo lỗi bạn viết ở Record DTO
                null
        );
        return ResponseEntity.status(ErrorCode.VALIDATION_ERROR.getStatusCode()).body(apiResponse);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplication.java">
package com.dangdepzaivaio.StudentManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing

public class StudentManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementApplication.class, args);
	}

}
</file>

<file path="pom.xml">
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>4.0.6</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.dangdepzaivaio</groupId>
	<artifactId>StudentManagement</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name/>
	<description/>
	<url/>
	<licenses>
		<license/>
	</licenses>
	<developers>
		<developer/>
	</developers>
	<scm>
		<connection/>
		<developerConnection/>
		<tag/>
		<url/>
	</scm>
	<properties>
		<java.version>26</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
<!--		<dependency>-->
<!--			<groupId>org.springframework.boot</groupId>-->
<!--			<artifactId>spring-boot-starter-security</artifactId>-->
<!--		</dependency>-->
<!--		<dependency>-->
<!--			<groupId>org.springframework.boot</groupId>-->
<!--			<artifactId>spring-boot-starter-thymeleaf</artifactId>-->
<!--		</dependency>-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId> </dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId> </dependency>
<!--		<dependency>-->
<!--			<groupId>org.thymeleaf.extras</groupId>-->
<!--			<artifactId>thymeleaf-extras-springsecurity6</artifactId>-->
<!--		</dependency>-->

		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>

		<dependency>
			<groupId>org.mapstruct</groupId>
			<artifactId>mapstruct</artifactId>
			<version>1.6.3</version> </dependency>
		<dependency>
			<groupId>org.mapstruct</groupId>
			<artifactId>mapstruct-processor</artifactId>
			<version>1.6.3</version>
			<scope>provided</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
<!--		<dependency>-->
<!--			<groupId>org.springframework.boot</groupId>-->
<!--			<artifactId>spring-boot-starter-security-test</artifactId>-->
<!--			<scope>test</scope>-->
<!--		</dependency>-->
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<executions>
					<execution>
						<id>default-compile</id>
						<phase>compile</phase>
						<goals>
							<goal>compile</goal>
						</goals>
						<configuration>
							<annotationProcessorPaths>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok</artifactId>
									<version>${lombok.version}</version>
								</path>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok-mapstruct-binding</artifactId>
									<version>0.2.0</version>
								</path>
								<path>
									<groupId>org.mapstruct</groupId>
									<artifactId>mapstruct-processor</artifactId>
									<version>1.6.3</version>
								</path>
							</annotationProcessorPaths>
						</configuration>
					</execution>
					<execution>
						<id>default-testCompile</id>
						<phase>test-compile</phase>
						<goals>
							<goal>testCompile</goal>
						</goals>
						<configuration>
							<annotationProcessorPaths>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok</artifactId>
									<version>${lombok.version}</version>
								</path>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok-mapstruct-binding</artifactId>
									<version>0.2.0</version>
								</path>
								<path>
									<groupId>org.mapstruct</groupId>
									<artifactId>mapstruct-processor</artifactId>
									<version>1.6.3</version>
								</path>
							</annotationProcessorPaths>
						</configuration>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>

</project>
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/README.md">
# Student Management System (Hệ thống Quản lý Sinh viên)

Hệ thống Backend RESTful API quản lý đào tạo và điểm số cấp bậc đại học, được xây dựng dựa trên kiến trúc phân tầng chuyên nghiệp (Layered Architecture) với các công nghệ tối tân nhất hiện nay.

---

## 🛠 1. Công nghệ Sử dụng (Tech Stack)
* **Core Language:** Java 26 (Tận dụng tối đa Java Records, Pattern Matching)
* **Framework:** Spring Boot 4.0.6 (Bản phát hành mới nhất)
* **Database Layer:** MySQL 8.0, Spring Data JPA (Hibernate 7.x)
* **Security & Auth:** Spring Security, JWT (JSON Web Token) - *Tạm thời disable ở môi trường Dev để test API*
* **Data Mapping & Utilities:** MapStruct 1.6.3, Lombok, Jakarta Validation
* **Build Tool:** Maven Wrapper (`./mvnw`)

---

## 🏗 2. Kiến trúc Hệ thống (Layered Architecture)
Dự án được phân chia thư mục nghiêm ngặt theo các tầng độc lập để đảm bảo tính dễ mở rộng và bảo trì:
* `entity`: Ánh xạ các bảng trong cơ sở dữ liệu với chiến lược tối ưu `FetchType.LAZY`.
* `repository`: Tầng giao tiếp dữ liệu trực tiếp với MySQL thông qua JpaRepository.
* `dto`: Đối tượng truyền tải dữ liệu, sử dụng **Java Records** bất biến (Immutable) siêu nhẹ kèm bộ lọc Validation đầu vào.
* `mapper`: Chuyển đổi tự động hiệu năng cao giữa Entity <-> DTO bằng MapStruct.
* `exception`: Bộ lọc quản lý và bắt lỗi tập trung toàn hệ thống.
* `service`: Nơi xử lý logic nghiệp vụ cốt lõi.
* `controller`: Định nghĩa các RESTful API Endpoint phục vụ Client.

---

## ✅ 3. Tiến độ Dự án: ĐÃ HOÀN THÀNH

### Giai đoạn 1: Khởi tạo và Cấu hình Nền tảng
* Khởi tạo thành công dự án Spring Boot 4.0.6 phối hợp Java 26 trên hệ thống Maven.
* Cấu hình đồng bộ tệp kết nối `application.yaml` tới MySQL Workbench, xử lý triệt để các cảnh báo bảo mật JDBC (`allowPublicKeyRetrieval=true`).
* Kiểm thử khởi động server cục bộ mượt mà trên cổng `8081`.

### Giai đoạn 2: Thiết kế và Ánh xạ 100% Hệ thống Thực thể (Entities)
Dựng hoàn thiện cấu trúc quan hệ lồng nhau giữa 8 thực thể lõi, kế thừa tự động hóa mốc thời gian từ `BaseEntity` (JPA Auditing):
1. **`Role`**: Danh mục vai trò hệ thống (ADMIN, TEACHER, STUDENT).
2. **`User`**: Định danh tài khoản hệ thống (Quan hệ `@ManyToMany` tự sinh bảng trung gian `user_roles` liên kết với Role).
3. **`Department`**: Quản lý các Khoa/Viện đào tạo.
4. **`Class`**: Lớp hành chính gốc của sinh viên (Quan hệ `@ManyToOne` thuộc về Department).
5. **`Student`**: Hồ sơ lý lịch sinh viên (Liên kết `@OneToOne` với User bảo mật và `@ManyToOne` với Class).
6. **`Subject`**: Danh mục môn học và số tín chỉ tương ứng.
7. **`CourseClass`**: Lớp học phần mở theo từng học kỳ (Quan hệ `@ManyToOne` liên kết Subject).
8. **`Grade`**: Bảng điểm số thành phần của sinh viên (Ràng buộc `@UniqueConstraint` kép giữa `student_id` và `course_class_id`).

### Giai đoạn 3: Tầng Truy xuất dữ liệu (Repository) & DTO gốc
* Khởi tạo đầy đủ 8 Interface JpaRepository kết nối trực tiếp database phục vụ truy vấn nâng cao.
* Thiết lập các bản ghi Request DTO sử dụng Java Records tích hợp chặt chẽ cơ chế kiểm tra lỗi dữ liệu đầu vào.
* Cấu hình tầng ánh xạ `StudentMapper` tự động sinh mã nguồn xử lý các đối tượng phức tạp lồng nhau.

### Giai đoạn 4: Bộ cấu trúc xử lý lỗi toàn cục (Global Exception)
* Khởi tạo thành công class khuôn mẫu dữ liệu trả về `ApiResponse` đồng nhất mọi luồng dữ liệu (ẩn các thuộc tính Null tự động).
* Thiết lập Enum `ErrorCode` quản lý tập trung mã lỗi nội bộ kèm HTTP Status chuẩn doanh nghiệp.
* Hoàn thiện bộ lọc `@RestControllerAdvice` bắt trọn vẹn lỗi Runtime hệ thống, lỗi logic nghiệp vụ (`AppException`), và tự động bóc tách chuỗi thông báo lỗi của Jakarta Validation trả ra ngoài Client.

### Giai đoạn 5: Xây dựng và Kiểm thử Toàn diện CRUD User API
* **Hoàn thiện Logic Tầng Service & Controller:** Thiết lập thành công trọn bộ 4 Endpoints cốt lõi cho `User`.
* **Cô lập & Sửa lỗi Xung đột Bảo mật (401 Unauthorized):** Phát hiện và xử lý triệt để tiến trình chạy ngầm, giải phóng cổng `8081` cho việc test logic thuần thục.
* **Nâng cấp Bộ bắt lỗi Chẩn đoán Nhanh trên Postman:** Tối ưu hóa hàm xử lý lỗi tổng quát trong `GlobalExceptionHandler` để bóc tách và trả thẳng chuỗi định danh lỗi (`ExceptionClass -> Message`) trực tiếp về Postman.
* **Kết quả Kiểm thử:** Toàn bộ 4 API vượt qua các kịch bản test trên Postman, ghi nhận trạng thái thành công mã `1000` (`200 OK`).

### Giai đoạn 6 (Mới cập nhật): Hoàn thiện Nghiệp vụ & Toàn bộ CRUD Student API
* **Thiết lập chuỗi API lồng nhau dữ liệu phức tạp (Nested JSON):** Xây dựng thành công bộ hàm tạo mới sinh viên đi kèm tài khoản hệ thống cùng lúc, tự động map cấu trúc DTO qua MapStruct.
* **Bảo vệ tính thực thi toàn vẹn bằng `@Transactional`:** Ràng buộc chặt chẽ quá trình lưu dữ liệu xuống bảng `users` và `students`. Đảm bảo hệ thống tự động Rollback (hủy bỏ) toàn luồng nếu xảy ra lỗi xung đột, không sinh dữ liệu rác.
* **Hoàn thành trọn vẹn các Endpoints cho Student:**
  * `POST /students`: Tạo mới sinh viên, tự động gán cứng Role `STUDENT` và xác thực logic tồn tại của Lớp hành chính (`classId`).
  * `GET /students`: Lấy danh sách toàn bộ hồ sơ sinh viên kèm theo dữ liệu "gia phả" đa tầng lồng nhau (User, Role, Class, Department).
  * `GET /students/{studentId}`: Xem thông tin chi tiết một sinh viên theo ID.
  * `PUT /students/{studentId}`: Cập nhật lý lịch cá nhân linh hoạt (Họ tên, ngày sinh, giới tính, số điện thoại) và hỗ trợ bốc dỡ điều chuyển lớp hành chính an toàn.
* **Kiểm thử Toàn diện:** Vượt qua toàn bộ kịch bản lỗi ràng buộc dữ liệu đầu vào (Trùng mã sinh viên, trùng Email, sai định dạng hoặc không tồn tại Lớp hành chính) trên môi trường Postman cục bộ.

---

## 🚀 4. Lộ trình Triển khai: CẦN LÀM TIẾP

### Giai đoạn 7: Nghiệp vụ Tính toán Điểm số & GPA Lõi
* Xây dựng tầng Service và Controller cho các thực thể Môn học (`Subject`), Lớp học phần (`CourseClass`) và Điểm số (`Grade`).
* Lập trình thuật toán tự động tính điểm tổng kết môn học hệ 10 từ các điểm thành phần (Chuyên cần, Giữa kỳ, Cuối kỳ).
* Tự động quy đổi điểm số sang hệ điểm chữ (A, B+, B, C, D, F...) theo quy chế đào tạo tín chỉ.
* Xây dựng hàm tính điểm trung bình học kỳ (GPA) và điểm tích lũy hệ 4 của sinh viên phục vụ xét học bổng, cảnh báo học vụ.

### Giai đoạn 8: Tích hợp Hệ thống Bảo mật Chuyên sâu (Spring Security & JWT)
* Kích hoạt lại Spring Security trên file `pom.xml`.
* Hiện thực hóa cơ chế mã hóa mật khẩu một chiều bằng thuật toán `BCryptPasswordEncoder`.
* Xây dựng API Đăng nhập (`POST /auth/login`), kiểm tra thông tin và cấp phát chuỗi mã hóa bảo mật Token JWT.
* Thiết lập cấu hình phân quyền chặt chẽ (Phân biệt vai trò: Chỉ Giảng viên/Admin được nhập và chỉnh sửa điểm, Sinh viên chỉ được quyền truy cập xem điểm cá nhân).

### Giai đoạn 9: Đóng gói và Triển khai hệ thống (Docker)
* Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java.
* Viết file liên kết đồng bộ `docker-compose.yml` để vận hành cùng lúc Container Spring Boot và Container Database MySQL độc lập trên mọi môi trường.

---

## 🔗 5. Quy trình quản lý mã nguồn (Git Workflow)
* **`main`**: Nhánh Production (chứa code ổn định).
* **`develop`**: Nhánh tích hợp (nơi gom tính năng).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển tính năng riêng lẻ.

---

### 📜 6. Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup-entities` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, MySQL. |
| 06/06/2026 | `feature/setup-entities` | **Hoàn thành** | Xây dựng 8 Entities, Repo, DTO, Mapper, Exception Handler. |
| 06/06/2026 | `main` | **Merge** | Gộp code từ `feature/setup-entities` vào `main`. |
| 06/06/2026 | `develop` | **Tạo mới** | Tạo nhánh `develop` từ `main`. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ thành công lỗi kẹt cổng 401). |
| 07/06/2026 | `develop` | **Cập nhật** | **Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản @Transactional và gán tự động phân quyền hệ thống.** |
</file>

<file path="src/main/resources/application.yaml">
spring:
  application:
    name: StudentManagement
  datasource:
    url: jdbc:mysql://localhost:3306/student_management?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    username: root
    password: dcnyuu
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        hibernate.dialect: org.hibernate.dialect.MySQLDialect
        hibernate.jdbc.batch_size: 20
server:
  port: 8081
</file>

</files>
