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
package.json
pom.xml
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/JwtAuthenticationFilter.java
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/SecurityConfig.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/AuthenticationController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/ClassController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/CourseClassController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/DepartmentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/GradeController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/RegistrationController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/SubjectController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/TeacherController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/AuthenticationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/ClassRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/CourseClassRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/DepartmentRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/GradeRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/SubjectRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/TeacherCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/TeacherUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ApiResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/AuthenticationResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ClassResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/CourseClassResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/CourseClassStatResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/DepartmentResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/GradeResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentAcademicSummaryResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/SubjectResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/TeacherResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/UserResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/BaseEntity.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Class.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/CourseClass.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Department.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Grade.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/RegistrationPeriod.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Role.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Student.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Subject.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Teacher.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/User.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/AppException.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/ErrorCode.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/GlobalExceptionHandler.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/ClassMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/CourseClassMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/DepartmentMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/GradeMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/SubjectMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/TeacherMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/UserMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/README.md
src/main/java/com/dangdepzaivaio/StudentManagement/repository/ClassRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/CourseClassRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/DepartmentRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/GradeRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/RegistrationPeriodRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/RoleRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/StudentRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/SubjectRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/TeacherRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/UserRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/scheduler/RegistrationScheduler.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/ClassService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/CourseClassService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/DepartmentService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/GradeService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/AuthenticationService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/ClassServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/CourseClassServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/DepartmentServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/GradeServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/RegistrationServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/StudentServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/SubjectServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/TeacherServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/UserServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/SubjectService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/TeacherService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/UserService.java
src/main/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplication.java
src/main/resources/application.yaml
src/test/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplicationTests.java
student_management.sql
student-management-ui/.gitignore
student-management-ui/eslint.config.js
student-management-ui/index.html
student-management-ui/package.json
student-management-ui/public/favicon.svg
student-management-ui/public/icons.svg
student-management-ui/README.md
student-management-ui/src/api/axiosClient.js
student-management-ui/src/App.css
student-management-ui/src/App.jsx
student-management-ui/src/assets/hero.png
student-management-ui/src/assets/react.svg
student-management-ui/src/assets/vite.svg
student-management-ui/src/components/CourseRegistration.jsx
student-management-ui/src/index.css
student-management-ui/src/main.jsx
student-management-ui/src/pages/DashboardPage.jsx
student-management-ui/src/pages/GradePage.jsx
student-management-ui/src/pages/LoginPage.jsx
student-management-ui/src/pages/RegistrationPage.jsx
student-management-ui/src/pages/SchedulePage.jsx
student-management-ui/src/pages/StudentPage.jsx
student-management-ui/src/pages/TeacherPage.jsx
student-management-ui/src/pages/TrainingPage.jsx
student-management-ui/vite.config.js
StudentManagement.docx
</directory_structure>

<files>
This section contains the contents of the repository's files.

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

<file path="package.json">
{
  "dependencies": {
    "axios": "^1.17.0",
    "react-router-dom": "^7.17.0"
  }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/JwtAuthenticationFilter.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import com.nimbusds.jwt.SignedJWT;
import com.nimbusds.jose.crypto.MACVerifier;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Value("${jwt.signer-key}")
    private String signerKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            try {
                SignedJWT signedJWT = SignedJWT.parse(token);
                MACVerifier verifier = new MACVerifier(signerKey.getBytes());

                // Xác thực chữ ký mã hóa và kiểm tra thời hạn token
                if (signedJWT.verify(verifier) && new Date().before(signedJWT.getJWTClaimsSet().getExpirationTime())) {
                    String username = signedJWT.getJWTClaimsSet().getSubject();
                    String scope = signedJWT.getJWTClaimsSet().getStringClaim("scope"); // Đọc chuỗi Roles từ Payload

                    // Chuyển đổi chuỗi role sang GrantedAuthority chuẩn Spring Security (Thêm tiền tố ROLE_)
                    List<SimpleGrantedAuthority> authorities = Arrays.stream(scope.split(" "))
                            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                            .collect(Collectors.toList());

                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(username, null, authorities);

                    // Thiết lập thông tin xác thực vào ngữ cảnh Security
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            } catch (Exception e) {
                SecurityContextHolder.clearContext();
            }
        }

        filterChain.doFilter(request, response);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/ClassController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.service.ClassService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/classes")
@RequiredArgsConstructor
public class ClassController {
    private final ClassService classService;

    @PostMapping
    public ApiResponse<ClassResponse> create(@RequestBody @Valid ClassRequest request) {
        return new ApiResponse<>(1000, "Tạo lớp hành chính mới thành công!", classService.createClass(request));
    }

    @GetMapping
    public ApiResponse<List<ClassResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy danh sách lớp hành chính thành công!", classService.getAllClasses());
    }
    @PutMapping("/{id}")
    public ApiResponse<ClassResponse> update(@PathVariable Long id, @RequestBody @Valid ClassRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin lớp hành chính thành công!", classService.updateClass(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Long id) {
        classService.deleteClass(id);
        return new ApiResponse<>(1000, "Xóa lớp hành chính thành công!", "Lớp hành chính có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    @GetMapping("/{id}")
    public ApiResponse<ClassResponse> getById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin lớp học thành công!", classService.getClassById(id));
    }

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/CourseClassController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.service.CourseClassService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course-classes")
@RequiredArgsConstructor
public class CourseClassController {

    private final CourseClassService courseClassService;

    @PostMapping
    public ApiResponse<CourseClassResponse> createCourseClass(@RequestBody @Valid CourseClassRequest request) {
        return new ApiResponse<>(1000, "Mở lớp học phần mới thành công!", courseClassService.createCourseClass(request));
    }

    @GetMapping
    public ApiResponse<List<CourseClassResponse>> getAllCourseClasses() {
        return new ApiResponse<>(1000, "Lấy danh sách lớp học phần thành công!", courseClassService.getAllCourseClasses());
    }

    @GetMapping("/{id}")
    public ApiResponse<CourseClassResponse> getCourseClassById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin chi tiết lớp học phần thành công!", courseClassService.getCourseClassById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<CourseClassResponse> updateCourseClass(@PathVariable Long id, @RequestBody @Valid CourseClassRequest request) {
        return new ApiResponse<>(1000, "Cập nhật lớp học phần thành công!", courseClassService.updateCourseClass(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteCourseClass(@PathVariable Long id) {
        courseClassService.deleteCourseClass(id);
        return new ApiResponse<>(1000, "Xóa lớp học phần thành công!", "Lớp học phần có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/DepartmentController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/departments")
@RequiredArgsConstructor
public class DepartmentController {
    private final DepartmentService departmentService;

    @PostMapping
    public ApiResponse<DepartmentResponse> create(@RequestBody @Valid DepartmentRequest request) {
        return new ApiResponse<>(1000, "Tạo khoa mới thành công!", departmentService.createDepartment(request));
    }

    @GetMapping
    public ApiResponse<List<DepartmentResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy danh sách khoa thành công!", departmentService.getAllDepartments());
    }

    @PutMapping("/{id}")
    public ApiResponse<DepartmentResponse> update(@PathVariable Long id, @RequestBody @Valid DepartmentRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin khoa thành công!", departmentService.updateDepartment(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
        return new ApiResponse<>(1000, "Xóa khoa thành công!", "Khoa có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    @GetMapping("/{id}")
    public ApiResponse<DepartmentResponse> getById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin khoa thành công!", departmentService.getDepartmentById(id));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/AuthenticationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

public record AuthenticationRequest(String username, String password) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/ClassRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ClassRequest(
        @NotBlank(message = "Tên lớp hành chính không được để trống") String name,
        @NotNull(message = "ID khoa không được để trống") Long departmentId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/DepartmentRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;

public record DepartmentRequest(
        @NotBlank(message = "Mã khoa không được để trống") String code,
        @NotBlank(message = "Tên khoa không được để trống") String name
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/SubjectRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SubjectRequest(
        @NotBlank(message = "Mã môn học không được để trống")
        String code,

        @NotBlank(message = "Tên môn học không được để trống")
        String name,

        @NotNull(message = "Số tín chỉ không được để trống")
        @Min(value = 1, message = "Số tín chỉ phải lớn hơn hoặc bằng 1")
        Integer credits
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/TeacherCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record TeacherCreationRequest(
        @NotBlank(message = "Mã giảng viên không được để trống") String teacherCode,
        @NotBlank(message = "Tên không được để trống") String firstName,
        @NotBlank(message = "Họ không được để trống") String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        @NotNull(message = "ID khoa không được để trống") Long departmentId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/TeacherUpdateRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import java.time.LocalDate;

public record TeacherUpdateRequest(
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ClassResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record ClassResponse(Long id, String name, String departmentCode, String departmentName) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/CourseClassStatResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record CourseClassStatResponse(
        Long courseClassId,
        String courseClassCode,
        String subjectName,
        String teacherName,
        long registeredStudents,
        String semester,
        Integer maxStudents,
        boolean openForRegistration
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/DepartmentResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record DepartmentResponse(Long id, String code, String name) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/SubjectResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record SubjectResponse(
        Long id,
        String code,
        String name,
        Integer credits
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/ClassMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ClassMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    Class toEntity(ClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    void updateEntityFromRequest(ClassRequest request, @MappingTarget Class studentClass);

    @Mapping(target = "departmentCode", source = "department.code")
    @Mapping(target = "departmentName", source = "department.name")
    ClassResponse toResponse(Class studentClass);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/DepartmentMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DepartmentMapper {
    @Mapping(target = "id", ignore = true)
    Department toEntity(DepartmentRequest request);

    @Mapping(target = "id", ignore = true)
    void updateEntityFromRequest(DepartmentRequest request, @MappingTarget Department department);

    DepartmentResponse toResponse(Department department);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/TeacherMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TeacherMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    @Mapping(target = "user", ignore = true)
    Teacher toEntity(TeacherCreationRequest request);

    // 🔥 VÁ LỖI TRỐNG DỮ LIỆU: Lấy thông tin từ các thực thể liên kết đưa vào DTO phẳng
    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email") // Ánh xạ Email giảng dạy
    @Mapping(target = "departmentName", source = "department.name") // Ánh xạ Tên Khoa chuyên môn
    @Mapping(target = "active", source = "active")
    TeacherResponse toResponse(Teacher teacher);
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/scheduler/RegistrationScheduler.java">
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
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/ClassService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import java.util.List;

public interface ClassService {
    ClassResponse createClass(ClassRequest request);
    List<ClassResponse> getAllClasses();
    ClassResponse updateClass(Long id, ClassRequest request);
    void deleteClass(Long id);
    ClassResponse getClassById(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/CourseClassService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import java.util.List;

public interface CourseClassService {
    CourseClassResponse createCourseClass(CourseClassRequest request);
    List<CourseClassResponse> getAllCourseClasses();
    CourseClassResponse getCourseClassById(Long id);
    CourseClassResponse updateCourseClass(Long id, CourseClassRequest request);
    void deleteCourseClass(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/DepartmentService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import java.util.List;

public interface DepartmentService {
    DepartmentResponse createDepartment(DepartmentRequest request);
    List<DepartmentResponse> getAllDepartments();
    DepartmentResponse updateDepartment(Long id, DepartmentRequest request);
    void deleteDepartment(Long id);
    DepartmentResponse getDepartmentById(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/DepartmentServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.DepartmentMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.service.DepartmentService; // 🔥 Thêm import này
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService { // 🔥 SỬA: implements DepartmentService
    private final DepartmentRepository departmentRepository;
    private final DepartmentMapper departmentMapper;
    private final ClassRepository classRepository;


    @Override
    @Transactional
    public DepartmentResponse createDepartment(DepartmentRequest request) {
        if (departmentRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.DEPARTMENT_EXISTED);
        }
        Department department = departmentMapper.toEntity(request);
        return departmentMapper.toResponse(departmentRepository.save(department));
    }

    @Override
    public List<DepartmentResponse> getAllDepartments() {
        return departmentRepository.findAll().stream()
                .map(departmentMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public DepartmentResponse updateDepartment(Long id, DepartmentRequest request) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        // Nếu thay đổi mã khoa, kiểm tra xem mã mới có trùng với khoa khác không
        if (!department.getCode().equals(request.code()) && departmentRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.DEPARTMENT_EXISTED);
        }

        departmentMapper.updateEntityFromRequest(request, department);
        return departmentMapper.toResponse(departmentRepository.save(department));
    }

    @Override
    @Transactional
    public void deleteDepartment(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        // 🛑 KIỂM TRA RÀNG BUỘC: Nếu khoa đang chứa lớp học phần hành chính -> Chặn đứng hành vi xóa
        if (classRepository.existsByDepartmentId(id)) {
            throw new AppException(ErrorCode.DEPARTMENT_HAS_CLASSES);
        }

        departmentRepository.delete(department);
    }
    @Override
    public DepartmentResponse getDepartmentById(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));
        return departmentMapper.toResponse(department); // 🌟 Sử dụng đúng toResponse
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/RegistrationServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.mapper.GradeMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.RegistrationPeriodRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegistrationServiceImpl {

    private final RegistrationPeriodRepository periodRepository;
    private final CourseClassRepository courseClassRepository;
    private final StudentRepository studentRepository;
    private final UserRepository userRepository;
    private final GradeRepository gradeRepository;
    private final CourseClassMapper courseClassMapper;
    private final GradeMapper gradeMapper;

    @Transactional
    public void registerCourseClass(Long courseClassId) {
        Student student = getCurrentStudent();
        CourseClass courseClass = getCourseClass(courseClassId);

        assertRegistrationOpen(courseClass);

        if (gradeRepository.existsByStudentIdAndCourseClassId(student.getId(), courseClassId)) {
            throw new AppException(ErrorCode.GRADE_EXISTED);
        }

        long registered = gradeRepository.countByCourseClassId(courseClassId);
        int maxStudents = courseClass.getMaxStudents() == null ? 60 : courseClass.getMaxStudents();
        if (registered >= maxStudents) {
            throw new AppException(ErrorCode.COURSE_CLASS_FULL);
        }

        Grade enrollment = Grade.builder()
                .student(student)
                .courseClass(courseClass)
                .build();

        gradeRepository.save(enrollment);
    }

    @Transactional
    public void cancelRegistration(Long courseClassId) {
        Student student = getCurrentStudent();
        CourseClass courseClass = getCourseClass(courseClassId);

        assertRegistrationOpen(courseClass);

        Grade grade = gradeRepository.findByStudentIdAndCourseClassId(student.getId(), courseClassId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_ENROLLED));

        if (hasAnyGradeValue(grade)) {
            throw new AppException(ErrorCode.GRADE_ALREADY_ENTERED);
        }

        gradeRepository.delete(grade);
    }

    public List<CourseClassResponse> getOpenCourseClasses() {
        LocalDateTime now = LocalDateTime.now();
        return courseClassRepository.findByOpenForRegistrationTrue().stream()
                .filter(courseClass -> periodRepository.findActivePeriod(courseClass.getSemester(), now).isPresent())
                .map(this::toResponseWithCount)
                .toList();
    }

    public List<GradeResponse> getCurrentStudentRegistrations() {
        Student student = getCurrentStudent();
        return gradeRepository.findByStudentId(student.getId()).stream()
                .map(gradeMapper::toResponse)
                .toList();
    }

    private CourseClass getCourseClass(Long courseClassId) {
        return courseClassRepository.findByIdWithSubjectAndTeacher(courseClassId)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
    }

    private void assertRegistrationOpen(CourseClass courseClass) {
        if (!courseClass.isOpenForRegistration()) {
            throw new AppException(ErrorCode.COURSE_CLASS_CLOSED);
        }

        periodRepository.findActivePeriod(courseClass.getSemester(), LocalDateTime.now())
                .orElseThrow(() -> new AppException(ErrorCode.REGISTRATION_PERIOD_CLOSED));
    }

    private Student getCurrentStudent() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        return studentRepository.findByIdWithJoinFetch(user.getId())
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
    }

    private boolean hasAnyGradeValue(Grade grade) {
        return grade.getAttendanceGrade() != null
                || grade.getMidtermGrade() != null
                || grade.getFinalGrade() != null
                || grade.getOverallGrade() != null
                || grade.getLetterGrade() != null
                || grade.getGrade4() != null;
    }

    private CourseClassResponse toResponseWithCount(CourseClass courseClass) {
        courseClass.setRegisteredStudents(gradeRepository.countByCourseClassId(courseClass.getId()));
        return courseClassMapper.toResponse(courseClass);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/TeacherService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.TeacherUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;

import java.util.List;

public interface TeacherService {
    TeacherResponse createTeacher(TeacherCreationRequest request);
    List<TeacherResponse> getAllTeachers();
    TeacherResponse getTeacherById(String id);
    TeacherResponse updateTeacher(String id, TeacherUpdateRequest request);
    void disableTeacher(String id);
    void enableTeacher(String id);
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

<file path="student-management-ui/.gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</file>

<file path="student-management-ui/eslint.config.js">
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
</file>

<file path="student-management-ui/index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>student-management-ui</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="student-management-ui/package.json">
{
  "name": "student-management-ui",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.17.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.17.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}
</file>

<file path="student-management-ui/public/favicon.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="student-management-ui/public/icons.svg">
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
</file>

<file path="student-management-ui/src/api/axiosClient.js">
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8081', // Cổng chạy của Spring Boot
    headers: {
        'Content-Type': 'application/json',
    },
});

// Tự động đính kèm JWT Token vào Header trước khi gửi request
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Tự động giải nén cấu trúc ApiResponse bọc ngoài của Backend
axiosClient.interceptors.response.use(
    (response) => {
        // Nếu Backend trả về code thành công 1000, lấy thẳng dữ liệu result ra ngoài
        if (response.data && response.data.code === 1000) {
            return response.data.result;
        }
        return response.data;
    },
    (error) => {
        // Bắt lỗi nghiệp vụ trả về từ GlobalExceptionHandler của Backend
        const errorMessage = error.response?.data?.message || 'Lỗi kết nối hệ thống!';
        return Promise.reject(errorMessage);
    }
);

export default axiosClient;
</file>

<file path="student-management-ui/src/App.css">
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
</file>

<file path="student-management-ui/src/assets/react.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
</file>

<file path="student-management-ui/src/assets/vite.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="student-management-ui/src/components/CourseRegistration.jsx">
import React, { useState, useEffect } from 'react';

// Giả định bạn lưu thông tin người dùng trong localStorage sau khi login
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

export default function CourseRegistration({ userRole, userId, studentId, teacherId }) {
    // State dùng chung
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    // --- STATE ADMIN ---
    const [periodForm, setPeriodForm] = useState({ semester: '', startTime: '', endTime: '' });
    const [stats, setStats] = useState([]);

    // --- STATE TEACHER ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [classStudents, setClassStudents] = useState([]);

    // --- STATE STUDENT (Dùng chung danh sách lớp học phần mở để đăng ký) ---
    const [availableClasses, setAvailableClasses] = useState([]);

    useEffect(() => {
        if (userRole === 'ADMIN') loadAdminStats();
        if (userRole === 'TEACHER') loadTeacherSchedule();
        if (userRole === 'STUDENT') loadAvailableClasses();
    }, [userRole]);

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    // ==================== 🛠️ LOGIC XỬ LÝ ADMIN ====================
    const loadAdminStats = async () => {
        try {
            const res = await fetch('http://localhost:8081/registration/statistics', { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setStats(data.result);
        } catch (err) { showMessage('Không thể tải số liệu thống kê', true); }
    };

    const handleCreatePeriod = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8081/registration/periods', {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(periodForm)
            });
            const data = await res.json();
            if (data.code === 1000) {
                showMessage('Mở cổng đăng ký tín chỉ thành công!');
                setPeriodForm({ semester: '', startTime: '', endTime: '' });
            } else {
                showMessage(data.message, true);
            }
        } catch (err) { showMessage('Lỗi kết nối Server', true); }
    };

    // ==================== 💼 LOGIC XỬ LÝ TEACHER ====================
    const loadTeacherSchedule = async () => {
        try {
            const res = await fetch(`http://localhost:8081/registration/teacher/${teacherId}/classes`, { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setTeacherClasses(data.result);
        } catch (err) { showMessage('Không thể tải lịch dạy', true); }
    };

    const viewClassStudents = async (classId) => {
        setSelectedClassId(classId);
        try {
            const res = await fetch(`http://localhost:8081/registration/classes/${classId}/students`, { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setClassStudents(data.result);
        } catch (err) { showMessage('Không thể tải danh sách sinh viên', true); }
    };

    // ==================== 🎓 LOGIC XỬ LÝ STUDENT ====================
    const loadAvailableClasses = async () => {
        // Trong thực tế, bạn gọi API lấy danh sách CourseClass mở thuộc Học kỳ hiện tại
        try {
            const res = await fetch('http://localhost:8081/grades', { headers: getAuthHeaders() }); // Gọi tạm endpoint để có danh sách hoặc viết riêng API getAllCourseClasses
            // Giả lập danh sách lớp học phần hiển thị cho sinh viên đăng ký
            setAvailableClasses([
                { id: 1, code: 'LHP_CNPM_01', subject: { name: 'Công nghệ phần mềm', credits: 3 }, teacher: { firstName: 'Đăng', lastName: 'Trần' }, semester: 'HK1-2026' },
                { id: 2, code: 'LHP_CSDL_02', subject: { name: 'Cơ sở dữ liệu', credits: 3 }, teacher: { firstName: 'Hải', lastName: 'Nguyễn' }, semester: 'HK1-2026' }
            ]);
        } catch (err) { console.error(err); }
    };

    const handleEnroll = async (courseClassId) => {
        try {
            const res = await fetch(`http://localhost:8081/registration/enroll?studentId=${studentId}&courseClassId=${courseClassId}`, {
                method: 'POST',
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (data.code === 1000) showMessage('Đăng ký môn học thành công!');
            else showMessage(data.message, true);
        } catch (err) { showMessage('Cổng đăng ký đang đóng hoặc lỗi hệ thống', true); }
    };

    const handleUnenroll = async (courseClassId) => {
        try {
            const res = await fetch(`http://localhost:8081/registration/unenroll?studentId=${studentId}&courseClassId=${courseClassId}`, {
                method: 'DELETE',
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (data.code === 1000) showMessage('Hủy đăng ký thành công!');
            else showMessage(data.message, true);
        } catch (err) { showMessage('Không thể hủy (Quá hạn hoặc đã có điểm)', true); }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Hệ Thống Quản Lý Đăng Ký Tín Chỉ</h2>

            {message.text && (
                <div style={{ padding: '10px', margin: '10px 0', backgroundColor: message.isError ? '#f8d7da' : '#d4edda', color: message.isError ? '#721c24' : '#155724', borderRadius: '4px' }}>
                    {message.text}
                </div>
            )}

            <hr />

            {/* ==================== VIEW ADMIN ==================== */}
            {userRole === 'ADMIN' && (
                <div>
                    <h3>⚙️ Quyền hạn: Quản trị viên (Admin)</h3>
                    <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                        {/* Form mở cổng */}
                        <form onSubmit={handleCreatePeriod} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h4>⏰ Thiết lập lịch đăng ký mới</h4>
                            <input type="text" placeholder="Học kỳ (VD: HK1-2026)" value={periodForm.semester} onChange={e => setPeriodForm({...periodForm, semester: e.target.value})} required style={{ padding: '8px' }} />
                            <label>Thời gian bắt đầu:</label>
                            <input type="datetime-local" value={periodForm.startTime} onChange={e => setPeriodForm({...periodForm, startTime: e.target.value})} required style={{ padding: '8px' }} />
                            <label>Thời gian kết thúc:</label>
                            <input type="datetime-local" value={periodForm.endTime} onChange={e => setPeriodForm({...periodForm, endTime: e.target.value})} required style={{ padding: '8px' }} />
                            <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Kích Hoạt Mở Cổng</button>
                        </form>

                        {/* Bảng thống kê số lượng */}
                        <div style={{ flex: 1 }}>
                            <h4>📊 Thống kê lượng sinh viên đăng ký theo lớp học phần</h4>
                            <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead style={{ backgroundColor: '#f2f2f2' }}>
                                <tr>
                                    <th>Mã Lớp Học Phần</th>
                                    <th>Tên Môn Học</th>
                                    <th>Giảng Viên</th>
                                    <th>Số SV Đăng Ký</th>
                                    <th>Học Kỳ</th>
                                </tr>
                                </thead>
                                <tbody>
                                {stats.map((stat, i) => (
                                    <tr key={i}>
                                        <td>{stat.courseClassCode}</td>
                                        <td>{stat.subjectName}</td>
                                        <td>{stat.teacherName}</td>
                                        <td style={{ fontWeight: 'bold', color: '#0056b3' }}>{stat.registeredStudents} SV</td>
                                        <td>{stat.semester}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== VIEW TEACHER ==================== */}
            {userRole === 'TEACHER' && (
                <div>
                    <h3>💼 Quyền hạn: Giảng viên</h3>
                    <h4>📅 Lịch dạy và quản lý danh sách lớp của bạn</h4>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <ul style={{ width: '250px', listStyle: 'none', padding: 0 }}>
                            {teacherClasses.map(c => (
                                <li key={c.id} onClick={() => viewClassStudents(c.id)} style={{ padding: '10px', backgroundColor: selectedClassId === c.id ? '#007bff' : '#f8f9fa', color: selectedClassId === c.id ? '#fff' : '#000', margin: '5px 0', cursor: 'pointer', borderRadius: '4px' }}>
                                    {c.code} - {c.semester}
                                </li>
                            ))}
                        </ul>

                        {selectedClassId && (
                            <div style={{ flex: 1 }}>
                                <h4>👥 Danh sách sinh viên thuộc lớp học phần này</h4>
                                <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                    <tr>
                                        <th>Mã Sinh Viên</th>
                                        <th>Họ Và Tên</th>
                                        <th>Giới Tính</th>
                                        <th>Số Điện Thoại</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {classStudents.map((sv, i) => (
                                        <tr key={i}>
                                            <td>{sv.studentCode}</td>
                                            <td>{sv.firstName} {sv.lastName}</td>
                                            <td>{sv.gender}</td>
                                            <td>{sv.phoneNumber}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== VIEW STUDENT ==================== */}
            {userRole === 'STUDENT' && (
                <div>
                    <h3>🎓 Phân hệ: Sinh viên đăng ký tín chỉ</h3>
                    <h4>🏫 Danh sách môn học / lớp học phần đang mở</h4>
                    <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                        <tr>
                            <th>Mã Lớp Học Phần</th>
                            <th>Tên Môn Học</th>
                            <th>Số Tín Chỉ</th>
                            <th>Giảng Viên Đứng Lớp</th>
                            <th>Học Kỳ</th>
                            <th>Thao Tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {availableClasses.map(c => (
                            <tr key={c.id}>
                                <td>{c.code}</td>
                                <td>{c.subject.name}</td>
                                <td>{c.subject.credits} tín</td>
                                <td>{c.teacher.lastName} {c.teacher.firstName}</td>
                                <td>{c.semester}</td>
                                <td>
                                    <button onClick={() => handleEnroll(c.id)} style={{ padding: '6px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', marginRight: '8px', cursor: 'pointer' }}>Đăng Ký</button>
                                    <button onClick={() => handleUnenroll(c.id)} style={{ padding: '6px 12px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Hủy Môn</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
</file>

<file path="student-management-ui/src/index.css">
:root {
  /* 🎨 Hệ màu sắc chuẩn (Bảo vệ mắt, giảm mỏi mắt ban đêm) */
  --color-bg: #141414;           /* Màu nền tối chủ đạo sâu */
  --color-surface: #222222;      /* Màu nền của Card, Sidebar, Form */
  --color-surface-hover: #2d2d2d;/* Màu khi di chuột vào vùng tương tác */
  --color-border: #333333;       /* Đường viền phân cách mảnh */

  /* 🌟 Màu sắc trạng thái tín chỉ */
  --color-primary: #007bff;      /* Màu xanh thương hiệu (Nút bấm, trạng thái chính) */
  --color-success: #28a745;      /* Màu xanh lá (Điểm cao, Đạt, Thành công) */
  --color-warning: #ffc107;      /* Màu vàng (Mã sinh viên, Cảnh báo, Điểm trung bình) */
  --color-danger: #dc3545;       /* Màu đỏ (Điểm F, Xóa, Lỗi hệ thống) */

  /* 📝 Màu chữ theo cấp độ phân rã */
  --text-main: #ffffff;          /* Chữ trắng rõ ràng cho nội dung chính */
  --text-muted: #aaaaaa;         /* Chữ xám cho nội dung phụ, mô tả */
  --text-cyan: #00ffff;          /* Màu nhấn phản quang cho tiêu đề, bảng số */

  /* 📐 Hệ khoảng cách và Kích thước (Spacing & Sizing) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;

  /* 🔤 Font size tiêu chuẩn hệ thống */
  --font-base: 14px;
  --font-md: 16px;
  --font-lg: 18px;
  --font-title: 24px;
}

/* Reset cơ bản cho toàn bộ ứng dụng sử dụng chuẩn toàn cục */
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--color-bg);
  color: var(--text-main);
  font-size: var(--font-base);
  -webkit-font-smoothing: antialiased;
}
</file>

<file path="student-management-ui/src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path="student-management-ui/src/pages/DashboardPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function DashboardPage() {
    const username = localStorage.getItem('username') || 'Người dùng';
    const role = localStorage.getItem('roles') || '';
    const studentId = localStorage.getItem('studentId') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    // --- STATES SỐ LIỆU NÂNG CAO CHO ADMIN ---
    const [adminMetrics, setAdminMetrics] = useState({
        totalStudents: 0, activeStudents: 0, lockedStudents: 0,
        totalTeachers: 0, activeTeachers: 0, lockedTeachers: 0,
        totalSubjects: 0,
        totalClasses: 0, openClasses: 0
    });
    const [allPeriods, setAllPeriods] = useState([]); // Lưu toàn bộ lịch sử đợt mở cổng

    // --- STATES CHO TEACHER & STUDENT (GIỮ NGUYÊN ĐỒNG BỘ) ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [myClasses, setMyClasses] = useState([]);
    const [studentInfo, setStudentInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                setLoading(true);

                // 🛠️ LUỒNG BIẾN ĐỔI CHUYÊN SÂU 1: PHÂN HỆ ADMIN
                if (role.includes('ADMIN')) {
                    const [resStudents, resTeachers, resSubjects, resClasses, resPeriods] = await Promise.all([
                        axiosClient.get('/students?includeInactive=true'),
                        axiosClient.get('/teachers'),
                        axiosClient.get('/subjects'),
                        axiosClient.get('/course-classes'),
                        axiosClient.get('/registration/periods').catch(() => [])
                    ]);

                    // Thuật toán bóc tách trạng thái tài khoản từ mảng dữ liệu thật
                    const sActive = resStudents ? resStudents.filter(s => s.active).length : 0;
                    const sLocked = resStudents ? resStudents.filter(s => !s.active).length : 0;
                    const tActive = resTeachers ? resTeachers.filter(t => t.active).length : 0;
                    const tLocked = resTeachers ? resTeachers.filter(t => !t.active).length : 0;
                    const cOpen = resClasses ? resClasses.filter(c => c.openForRegistration).length : 0;

                    setAdminMetrics({
                        totalStudents: resStudents?.length || 0, activeStudents: sActive, lockedStudents: sLocked,
                        totalTeachers: resTeachers?.length || 0, activeTeachers: tActive, lockedTeachers: tLocked,
                        totalSubjects: resSubjects?.length || 0,
                        totalClasses: resClasses?.length || 0, openClasses: cOpen
                    });

                    if (resPeriods && resPeriods.length > 0) {
                        setAllPeriods([...resPeriods].sort((a, b) => b.id - a.id));
                    }
                }

                // 🛠️ LUỒNG BIẾN ĐỔI 2: PHÂN HỆ TEACHER
                if (role.includes('TEACHER')) {
                    if (teacherId) {
                        const classes = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
                        setTeacherClasses(classes || []);
                    }
                }

                // 🛠️ LUỒNG BIẾN ĐỔI 3: PHÂN HỆ STUDENT
                if (role.includes('STUDENT')) {
                    const [resMyClasses, resAllStudents] = await Promise.all([
                        axiosClient.get('/registration/my-classes'),
                        axiosClient.get('/students?includeInactive=true').catch(() => [])
                    ]);
                    setMyClasses(resMyClasses || []);

                    if (resAllStudents && resAllStudents.length > 0) {
                        const currentStudent = resAllStudents.find(s => s.studentCode === username || s.id === studentId);
                        setStudentInfo(currentStudent || null);
                    }
                }
            } catch (err) {
                console.error("Lỗi kết nối dữ liệu Dashboard:", err);
            } finally {
                setLoading(false);
            }
        };
        loadDashboardData();
    }, [role, username, studentId, teacherId]);

    const getPeriodStatusText = (period) => {
        if (!period) return { text: 'Chưa rõ', color: 'var(--text-muted)' };
        if (!period.isActive) return { text: '🔒 Đã đóng cổng', color: 'var(--color-danger)' };
        const now = new Date();
        const start = new Date(period.startTime);
        const end = new Date(period.endTime);
        if (now < start) return { text: '⏳ Chờ giờ hẹn', color: 'var(--color-warning)' };
        if (now > end) return { text: '⏰ Hết hạn đóng cổng', color: 'var(--color-danger)' };
        return { text: '🟢 ĐANG MỞ REALTIME', color: 'var(--color-success)' };
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px' }}>Đang tổng hợp dữ liệu hệ thống đào tạo...</div>;

    // ==================== 🏛️ VÙNG 1: ĐẠI TU GIÀU CHI TIẾT DÀNH CHO ADMIN ====================
    if (role.includes('ADMIN')) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>

                {/* Thanh trạng thái đỉnh điều khiển */}
                <div style={panelStyle}>
                    <h2 style={{ margin: '0 0 5px 0', color: 'var(--text-cyan)' }}>🏛️ TRUNG TÂM GIÁM SÁT ĐÀO TẠO ĐA NHIỆM (ADMIN CONSOLE)</h2>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Chào mừng Quản trị viên tối cao. Dưới đây là bảng phân tích chi tiết dữ liệu vận hành lõi.</p>
                </div>

                {/* Khối Card số liệu chi tiết sâu (Deep Metrics Grid) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
                    {/* Card Sinh viên */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>👥</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>QUẢN LÝ SINH VIÊN</div>
                            <div style={cardValueStyle}>{adminMetrics.totalStudents} <span style={{fontSize:'12px', fontWeight:'normal'}}>Tổng số</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--color-success)'}}>● Đang học: {adminMetrics.activeStudents}</span>
                                <span style={{color:'var(--color-danger)'}}>● Khóa: {adminMetrics.lockedStudents}</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Giảng viên */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>💼</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>QUẢN LÝ GIẢNG VIÊN</div>
                            <div style={cardValueStyle}>{adminMetrics.totalTeachers} <span style={{fontSize:'12px', fontWeight:'normal'}}>Nhân sự</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--color-success)'}}>● Đang dạy: {adminMetrics.activeTeachers}</span>
                                <span style={{color:'var(--color-danger)'}}>● Khóa: {adminMetrics.lockedTeachers}</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Đào tạo */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>📘</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>HỆ THỐNG ĐÀO TẠO</div>
                            <div style={cardValueStyle}>{adminMetrics.totalSubjects} <span style={{fontSize:'12px', fontWeight:'normal'}}>Môn học</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--text-cyan)'}}>● Lớp HP hệ thống: {adminMetrics.totalClasses}</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Điều phối đăng ký */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>⏰</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>ĐIỀU PHỐI TÍN CHỈ</div>
                            <div style={cardValueStyle}>{adminMetrics.openClasses} <span style={{fontSize:'12px', fontWeight:'normal'}}>Lớp mở đăng ký</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--color-warning)'}}>● Tổng số đợt hẹn: {allPeriods.length} đợt</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KHỐI 2 BẢNG CHI TIẾT: LỊCH SỬ KHUNG GIỜ VÀ SYSTEM HEALTH */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '20px', flexWrap: 'wrap' }}>

                    {/* Bảng trái: Lịch sử toàn bộ các đợt mở cổng */}
                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-cyan)' }}>📋 LỊCH SỬ VÀ TIẾN ĐỘ CÁC ĐỢT MỞ ĐĂNG KÝ TÍN CHỈ</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={dashboardTableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th>Mã Đợt</th><th>Học Kỳ</th><th>Thời Gian Bắt Đầu</th><th>Thời Gian Kết Thúc</th><th style={{textAlign:'center'}}>Trạng Thái Thực Tế</th>
                                </tr>
                                </thead>
                                <tbody>
                                {allPeriods.map((p) => {
                                    const stat = getPeriodStatusText(p);
                                    return (
                                        <tr key={p.id} style={trStyle}>
                                            <td style={{fontWeight:'bold', color:'var(--text-muted)'}}>#RP_{p.id}</td>
                                            <td style={{fontWeight:'bold', color:'white'}}>{p.semester}</td>
                                            <td style={{fontSize:'12px'}}>{new Date(p.startTime).toLocaleString('vi-VN')}</td>
                                            <td style={{fontSize:'12px'}}>{new Date(p.endTime).toLocaleString('vi-VN')}</td>
                                            <td style={{textAlign:'center', fontSize:'12px', color: stat.color, fontWeight:'bold'}}>{stat.text}</td>
                                        </tr>
                                    );
                                })}
                                {allPeriods.length === 0 && (
                                    <tr><td colSpan="5" style={{textAlign:'center', color:'var(--text-muted)', padding:'10px'}}>Chưa có dữ liệu lịch sử đợt mở.</td></tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bảng phải: Giám sát Hệ thống / Audit Logs giả lập */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {/* Hộp System Performance */}
                        <div style={panelStyle}>
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-warning)' }}>🖥️ MONITOR SYSTEM HEALTH</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
                                <div style={logItemStyle}>🚀 Server Status: <span style={{color:'var(--color-success)', fontWeight:'bold'}}>ONLINE</span></div>
                                <div style={logItemStyle}>⚙️ Core Version: <span>v2.4.0-Stable</span></div>
                                <div style={logItemStyle}>🧠 RAM Allocated: <span>412MB / 1024MB</span></div>
                                <div style={logItemStyle}>⚡ DB Pool: <span style={{color:'var(--text-cyan)'}}>Active (8/20)</span></div>
                            </div>
                        </div>

                        {/* Hộp Nhật ký hành động nhanh */}
                        <div style={panelStyle}>
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-cyan)' }}>📑 SYSTEM AUDIT LOGS (NHẬT KÝ THỜI GIAN THỰC)</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', maxHeight: '140px', overflowY: 'auto', color: 'var(--text-muted)' }}>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>⏱️ [Just Now] Admin vừa thực hiện quy trình kiểm tra đồng bộ mảng dữ liệu.</div>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>🔑 [5 mins ago] Tài khoản mã số gán khóa học vừa nạp cấu hình thành công.</div>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>🗄️ [10 mins ago] JPA Hibernate đồng bộ hóa cột dữ liệu trường `cohort` thành công.</div>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>🔒 [30 mins ago] Cấu hình Filter Security bảo mật tầng URL định tuyến mở cổng thành công.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // ==================== 💼 VÙNG 2: GIAO DIỆN DÀNH CHO GIẢNG VIÊN (TEACHER) ====================
    if (role.includes('TEACHER')) {
        return (
            <div style={containerStyle}>
                <div style={panelStyle}>
                    <h2 style={{ margin: '0 0 5px 0', color: 'var(--text-cyan)' }}>💼 CỔNG THÔNG TIN TỔNG QUAN GIẢNG VIÊN</h2>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Xin chào Thầy/Cô <b>{username}</b>. Dưới đây là tóm tắt danh sách lớp đảm nhiệm trong học kỳ.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ ...cardStyle, justifyContent: 'center', textAlign: 'center', padding: '30px' }}>
                        <div>
                            <div style={cardTitleStyle}>HỌC PHẦN ĐANG ĐẢM NHIỆM</div>
                            <div style={{...cardValueStyle, fontSize:'36px', color:'var(--text-cyan)', marginTop:'8px'}}>{teacherClasses.length} Lớp</div>
                        </div>
                    </div>
                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--color-warning)', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>📅 THỜI KHÓA BIỂU GIẢNG DẠY CỦA THẦY/CÔ</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                            {teacherClasses.map((c, i) => (
                                <div key={i} style={itemStyle}>
                                    📖 <b>Lớp học phần: {c.code}</b> — Môn: {c.subjectName} | ⏰ Lịch lên lớp: <span style={{color:'var(--color-warning)', fontWeight:'bold'}}>{c.schedule || 'Chưa xếp lịch'}</span>
                                </div>
                            ))}
                            {teacherClasses.length === 0 && <p style={{color:'var(--text-muted)', margin:0}}>Học kỳ này Thầy/Cô chưa có lịch phân công giảng dạy.</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ==================== 🎓 VÙNG 3: GIAO DIỆN DÀNH CHO SINH VIÊN (STUDENT) ====================
    if (role.includes('STUDENT')) {
        const totalCredits = myClasses.reduce((sum, item) => sum + (item.credits || 0), 0);
        return (
            <div style={containerStyle}>
                <div style={panelStyle}>
                    <h2 style={{ margin: '0 0 5px 0', color: 'var(--text-cyan)' }}>🎓 CỔNG THÔNG TIN SINH VIÊN TRA CỨU HỒ SƠ</h2>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Quản lý thông tin lý lịch cá nhân và sơ đồ lịch trình lên lớp tuần cá nhân.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-cyan)', borderBottom:'1px solid var(--color-border)', paddingBottom:'6px' }}>👤 HỒ SƠ LÝ LỊCH CÁ NHÂN SV</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                            <div>• Mã số sinh viên: <b style={{color:'var(--color-warning)'}}>{studentInfo?.studentCode || username}</b></div>
                            <div>• Họ và tên học viên: <b>{studentInfo ? `${studentInfo.lastName} ${studentInfo.firstName}` : 'Học viên'}</b></div>
                            <div>• Lớp hành chính gốc: <span style={{color:'var(--text-cyan)', fontWeight:'bold'}}>{studentInfo?.className || 'Chưa xếp lớp'}</span></div>
                            <div>• Niên khóa đào tạo: <b style={{color:'var(--color-success)'}}>{studentInfo?.cohort || 'Khóa 1'}</b></div>
                            <div>• Hộp thư nhà trường: <span style={{color:'var(--text-muted)'}}>{studentInfo?.email || 'Chưa cấp'}</span></div>
                        </div>
                    </div>

                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--color-warning)', borderBottom:'1px solid var(--color-border)', paddingBottom:'6px' }}>📈 SƠ ĐỒ ĐĂNG KÝ HỌC PHẦN HỌC KỲ</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={metricBoxStyle}>
                                    <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>{myClasses.length}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop:'2px' }}>MÔN ĐÃ ĐK</div>
                                </div>
                                <div style={metricBoxStyle}>
                                    <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-success)' }}>{totalCredits}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop:'2px' }}>TỔNG TÍN CHỈ</div>
                                </div>
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                💡 <b>Lưu ý cấu trúc:</b> Sinh viên chủ động rà soát Thời khóa biểu bên dưới để tránh trùng lặp khung giờ ca học đan xen động!
                            </div>
                        </div>
                    </div>
                </div>

                <div style={panelStyle}>
                    <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-success)' }}>📅 THỜI KHÓA BIỂU LỊCH HỌC TUẦN CỦA BẠN</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                        {myClasses.map((reg, i) => (
                            <div key={i} style={itemStyle}>
                                📝 <b>Mã lớp học phần: {reg.courseClassCode}</b> — Tên môn: {reg.subjectName} ({reg.credits} tín) | 📅 Lịch học: <span style={{color:'var(--color-success)', fontWeight:'bold'}}>{reg.schedule || 'Chưa xếp lịch'}</span>
                            </div>
                        ))}
                        {myClasses.length === 0 && (
                            <p style={{color:'var(--text-muted)', margin: 0, padding: '10px 0'}}>Bạn chưa thực hiện thao tác chọn đăng ký lớp học phần nào trong học kỳ này.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

// --- CẤU HÌNH INLINE CSS DESIGN CHUẨN ĐẸP ---
const containerStyle = { display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' };
const panelStyle = { backgroundColor: 'var(--color-surface)', padding: '15px 20px', borderRadius: '6px', border: '1px solid var(--color-border)' };
const cardStyle = { display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' };
const deepCardStyle = { display: 'flex', gap: '15px', backgroundColor: 'var(--color-surface)', padding: '18px 15px', borderRadius: '6px', border: '1px solid var(--color-border)' };
const cardTitleStyle = { fontSize: '11px', fontWeight: 'bold', color: 'var(--text-muted)', letterSpacing: '0.3px' };
const cardValueStyle = { fontSize: '20px', fontWeight: 'bold', color: 'white', marginTop: '2px', marginBottom: '6px' };
const subMetricStyle = { display: 'flex', gap: '10px', fontSize: '11px', fontWeight: 'bold' };
const itemStyle = { padding: '8px 12px', backgroundColor: 'var(--color-bg)', borderRadius: '4px', borderLeft: '3px solid var(--color-primary)' };
const metricBoxStyle = { backgroundColor: 'var(--color-bg)', padding: '12px', borderRadius: '6px', textAlign: 'center', minWidth: '95px', border: '1px solid var(--color-border)' };
const logItemStyle = { padding: '6px', backgroundColor: 'var(--color-bg)', borderRadius: '4px', color: 'var(--text-main)' };

// Style bảng bổ sung chuyên nghiệp
const dashboardTableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '5px' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', textAlign: 'left', padding: '8px', fontSize: '13px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '8px' };
</file>

<file path="student-management-ui/src/pages/SchedulePage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function SchedulePage() {
    const role = localStorage.getItem('roles') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    const isStudent = role.includes('STUDENT');
    const isTeacher = role.includes('TEACHER');

    const [loading, setLoading] = useState(false);
    const [scheduleGrid, setScheduleGrid] = useState({
        'Sáng': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
        'Chiều': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
        'Tối': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] }
    });

    useEffect(() => {
        loadScheduleData();
    }, [role]);

    const loadScheduleData = async () => {
        setLoading(true);
        try {
            let validClasses = [];

            if (isStudent) {
                // Lấy toàn bộ môn sinh viên đã đăng ký
                const myClasses = await axiosClient.get('/registration/my-classes');

                // CHỈ LẤY NHỮNG MÔN ĐÃ ĐƯỢC GIÁO VIÊN DUYỆT
                validClasses = myClasses.filter(reg => {
                    return localStorage.getItem(`approved_st_${reg.courseClassId}_${loggedInStudentId}`) === 'true';
                });
            } else if (isTeacher && teacherId) {
                // Giáo viên xem lịch dạy của mình
                validClasses = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
            }

            buildGrid(validClasses);
        } catch (err) {
            console.error('Lỗi tải thời khóa biểu:', err);
        } finally {
            setLoading(false);
        }
    };

    const buildGrid = (classes) => {
        // Khởi tạo lưới rỗng
        const newGrid = {
            'Sáng': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
            'Chiều': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
            'Tối': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] }
        };

        classes.forEach(cls => {
            const schedStr = (cls.schedule || '').toLowerCase();
            if (!schedStr) return;

            // Bóc tách Thứ
            let dayKey = '';
            if (schedStr.includes('chủ nhật') || schedStr.includes('cn')) dayKey = 'CN';
            else {
                const dayMatch = schedStr.match(/thứ\s*(\d+)/) || schedStr.match(/t(\d+)/);
                if (dayMatch) dayKey = dayMatch[1];
            }

            // Bóc tách Buổi
            let shiftKey = '';
            if (schedStr.includes('sáng') || schedStr.match(/tiết\s*[1-4]/)) shiftKey = 'Sáng';
            else if (schedStr.includes('chiều') || schedStr.match(/tiết\s*[5-8]/)) shiftKey = 'Chiều';
            else if (schedStr.includes('tối') || schedStr.match(/tiết\s*(9|10|11|12)/)) shiftKey = 'Tối';

            // Nếu lấy được đủ Thứ và Buổi, ném vào ô tương ứng trên lưới
            if (dayKey && shiftKey && newGrid[shiftKey][dayKey]) {
                newGrid[shiftKey][dayKey].push(cls);
            }
        });

        setScheduleGrid(newGrid);
    };

    const daysList = ['2', '3', '4', '5', '6', '7', 'CN'];
    const shiftsList = [
        { key: 'Sáng', label: 'Buổi Sáng', time: '(Tiết 1-4)' },
        { key: 'Chiều', label: 'Buổi Chiều', time: '(Tiết 5-8)' },
        { key: 'Tối', label: 'Buổi Tối', time: '(Tiết 9-12)' }
    ];

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>
                    {isTeacher ? '👨‍🏫 LỊCH GIẢNG DẠY CÁ NHÂN' : '🎓 THỜI KHÓA BIỂU HỌC TẬP'}
                </h2>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                    {isTeacher
                        ? 'Lịch hiển thị các lớp học phần bạn được phân công giảng dạy.'
                        : 'Lưu ý: Thời khóa biểu chỉ hiển thị những môn học đã được Giảng viên phê duyệt đơn đăng ký.'}
                </p>
            </div>

            {loading ? (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Đang xếp lịch...</p>
            ) : (
                <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', padding: '15px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px', tableLayout: 'fixed' }}>
                        <thead>
                        <tr>
                            <th style={{ ...thStyle, width: '10%' }}>Ca Học</th>
                            {daysList.map(day => (
                                <th key={day} style={{ ...thStyle, width: '12.8%' }}>
                                    {day === 'CN' ? 'Chủ Nhật' : `Thứ ${day}`}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {shiftsList.map(shift => (
                            <tr key={shift.key}>
                                {/* Cột tiêu đề Ca học */}
                                <td style={{ ...tdShiftLabelStyle }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{shift.label}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{shift.time}</div>
                                </td>

                                {/* Các cột Thứ trong tuần */}
                                {daysList.map(day => {
                                    const classesInSlot = scheduleGrid[shift.key][day];
                                    return (
                                        <td key={day} style={{ ...tdStyle, verticalAlign: 'top', backgroundColor: classesInSlot.length > 0 ? 'rgba(0, 188, 212, 0.05)' : 'transparent' }}>
                                            {classesInSlot.length > 0 ? (
                                                classesInSlot.map((cls, index) => (
                                                    <div key={index} style={classCardStyle}>
                                                        <div style={{ fontWeight: 'bold', color: 'var(--text-cyan)', marginBottom: '4px' }}>
                                                            {cls.subjectName}
                                                        </div>
                                                        <div style={{ fontSize: '12px', marginBottom: '2px' }}>
                                                            <span style={{ color: 'var(--text-muted)' }}>Mã HP:</span> {cls.code || cls.courseClassCode}
                                                        </div>
                                                        {isStudent && (
                                                            <div style={{ fontSize: '12px', marginBottom: '2px' }}>
                                                                <span style={{ color: 'var(--text-muted)' }}>GV:</span> {cls.teacherName || 'Chưa xếp'}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <div style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '20px', opacity: 0.5 }}>
                                                    Trống
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

// ================= CSS CHO BẢNG LỊCH =================
const thStyle = {
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface-hover)',
    color: 'var(--text-cyan)',
    padding: '12px',
    textAlign: 'center',
    fontWeight: 'bold'
};

const tdShiftLabelStyle = {
    border: '1px solid var(--color-border)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: '15px',
    textAlign: 'center',
    verticalAlign: 'middle'
};

const tdStyle = {
    border: '1px solid var(--color-border)',
    padding: '10px',
    height: '140px' // Đảm bảo các ô có độ cao đồng đều
};

const classCardStyle = {
    backgroundColor: 'var(--color-bg)',
    borderLeft: '4px solid var(--color-success)',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    wordWrap: 'break-word'
};
</file>

<file path="student-management-ui/src/pages/TrainingPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function TrainingPage() {
    const [subTab, setSubTab] = useState('departments');
    const [departments, setDepartments] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [courseClasses, setCourseClasses] = useState([]);
    const [teachers, setTeachers] = useState([]);

    // --- TRẠNG THÁI CHẾ ĐỘ SỬA (EDIT MODE STATES) ---
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Form states
    const [deptForm, setDeptForm] = useState({ code: '', name: '' });
    const [subjectForm, setSubjectForm] = useState({ code: '', name: '', credits: 3 });
    const [classForm, setClassForm] = useState({ code: '', semester: 'HK1-2026', subjectId: '', teacherId: '', maxStudents: 60 });

    // Quản lý danh sách các buổi học động
    const [scheduleSlots, setScheduleSlots] = useState([
        { day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }
    ]);

    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    const shifts = ['Sáng (Tiết 1-4)', 'Chiều (Tiết 5-8)', 'Tối (Tiết 9-12)'];

    useEffect(() => {
        loadDepartments();
        loadSubjects();
        loadCourseClasses();
        loadTeachers();
    }, []);

    // Mỗi khi chuyển đổi tiểu ban (subTab), tự động hủy trạng thái sửa cũ để tránh xung đột form
    useEffect(() => {
        resetAllForms();
    }, [subTab]);

    const loadDepartments = async () => { try { const data = await axiosClient.get('/departments'); setDepartments(data); } catch (e) { console.error(e); } };
    const loadSubjects = async () => { try { const data = await axiosClient.get('/subjects'); setSubjects(data); } catch (e) { console.error(e); } };
    const loadCourseClasses = async () => { try { const data = await axiosClient.get('/course-classes'); setCourseClasses(data); } catch (e) { console.error(e); } };
    const loadTeachers = async () => { try { const data = await axiosClient.get('/teachers'); setTeachers(data); } catch (e) { console.error(e); } };

    const resetAllForms = () => {
        setIsEditMode(false);
        setEditingId(null);
        setDeptForm({ code: '', name: '' });
        setSubjectForm({ code: '', name: '', credits: 3 });
        setClassForm({ code: '', semester: 'HK1-2026', subjectId: '', teacherId: '', maxStudents: 60 });
        setScheduleSlots([{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);
    };

    // --- THUẬT TOÁN ĐỌC NGƯỢC CHUỖI LỊCH (SCHEDULE DECODER) ---
    // Biến đổi chuỗi "Thứ 2 Sáng (Tiết 1-4) - Phòng 402 | Thứ 6 Chiều (Tiết 5-8) - Phòng 301" thành mảng Object cấu trúc ban đầu
    const parseScheduleToSlots = (scheduleStr) => {
        if (!scheduleStr) return [{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }];
        try {
            const parts = scheduleStr.split(' | ');
            return parts.map(part => {
                const subParts = part.split(' - ');
                const dayShift = subParts[0]; // "Thứ 2 Sáng (Tiết 1-4)"
                const roomPart = subParts[1] || ''; // "Phòng 402"

                const roomValue = roomPart.replace('Phòng ', '').trim();
                const foundDay = daysOfWeek.find(d => dayShift.startsWith(d)) || 'Thứ 2';
                const shiftValue = dayShift.replace(foundDay, '').trim();

                return { day: foundDay, shift: shiftValue || 'Sáng (Tiết 1-4)', room: roomValue };
            });
        } catch (e) {
            return [{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }];
        }
    };

    // --- TÁC VỤ CHO LỊCH ĐỘNG ---
    const handleAddSlot = () => setScheduleSlots([...scheduleSlots, { day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);
    const handleRemoveSlot = (index) => {
        if (scheduleSlots.length === 1) return;
        setScheduleSlots(scheduleSlots.filter((_, i) => i !== index));
    };
    const handleSlotChange = (index, field, value) => {
        const updatedSlots = [...scheduleSlots];
        updatedSlots[index][field] = value;
        setScheduleSlots(updatedSlots);
    };

    // ==================== 🏛️ XỬ LÝ KHỐI KHOA (DEPARTMENTS) ====================
    const handleSaveDept = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axiosClient.put(`/departments/${editingId}`, deptForm);
                alert('Cập nhật thông tin khoa thành công!');
            } else {
                await axiosClient.post('/departments', deptForm);
                alert('Thêm khoa chuyên môn mới thành công!');
            }
            resetAllForms();
            loadDepartments();
        } catch (err) { alert(err || 'Có lỗi xảy ra!'); }
    };

    const handleOpenEditDept = (dept) => {
        setIsEditMode(true);
        setEditingId(dept.id);
        setDeptForm({ code: dept.code, name: dept.name });
    };

    const handleDeleteDept = async (id, name) => {
        if (window.confirm(`⚠️ Bạn có chắc chắn muốn XÓA HOÀN TOÀN khoa [${name}] không?\nHành động này có thể ảnh hưởng đến giảng viên thuộc khoa.`)) {
            try {
                await axiosClient.delete(`/departments/${id}`);
                alert('Đã xóa khoa ra khỏi hệ thống thành công!');
                loadDepartments();
            } catch (err) { alert(err || 'Không thể xóa khoa này do có ràng buộc dữ liệu!'); }
        }
    };

    // ==================== 📘 XỬ LÝ KHỐI MÔN HỌC (SUBJECTS) ====================
    const handleSaveSubject = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axiosClient.put(`/subjects/${editingId}`, subjectForm);
                alert('Cập nhật thông tin môn học thành công!');
            } else {
                await axiosClient.post('/subjects', subjectForm);
                alert('Thêm môn học hệ thống mới thành công!');
            }
            resetAllForms();
            loadSubjects();
        } catch (err) { alert(err || 'Có lỗi xảy ra!'); }
    };

    const handleOpenEditSubject = (sub) => {
        setIsEditMode(true);
        setEditingId(sub.id);
        setSubjectForm({ code: sub.code, name: sub.name, credits: sub.credits });
    };

    const handleDeleteSubject = async (id, name) => {
        if (window.confirm(`⚠️ Bạn có chắc chắn muốn XÓA HOÀN TOÀN môn học [${name}] không?`)) {
            try {
                await axiosClient.delete(`/subjects/${id}`);
                alert('Đã loại bỏ môn học thành công!');
                loadSubjects();
            } catch (err) { alert(err || 'Không thể xóa môn học này!'); }
        }
    };

    // ==================== 📅 XỬ LÝ KHỐI LỚP HỌC PHẦN (COURSE CLASSES) ====================
    const handleSaveClass = async (e) => {
        e.preventDefault();
        for (let slot of scheduleSlots) {
            if (!slot.room.trim()) { alert('Vui lòng điền phòng học cho tất cả các buổi!'); return; }
        }

        const compiledSchedule = scheduleSlots
            .map(slot => `${slot.day} ${slot.shift} - Phòng ${slot.room.trim()}`)
            .join(' | ');

        const payload = {
            ...classForm,
            subjectId: Number(classForm.subjectId),
            maxStudents: Number(classForm.maxStudents),
            schedule: compiledSchedule
        };

        try {
            if (isEditMode) {
                await axiosClient.put(`/course-classes/${editingId}`, payload);
                alert('Cập nhật lớp học phần và điều chỉnh thời khóa biểu đồng bộ thành công!');
            } else {
                await axiosClient.post('/course-classes', payload);
                alert('Mở lớp học phần mới và xếp lịch biểu thành công!');
            }
            resetAllForms();
            loadCourseClasses();
        } catch (err) { alert(err || 'Có lỗi xảy ra!'); }
    };

    const handleOpenEditClass = (cls) => {
        setIsEditMode(true);
        setEditingId(cls.id);
        setClassForm({
            code: cls.code,
            semester: cls.semester,
            subjectId: cls.subjectId || '',
            teacherId: cls.teacherId || '',
            maxStudents: cls.maxStudents || 60
        });
        // Giải mã chuỗi schedule ngược lại thành dạng mảng ô checkbox tương tác
        setScheduleSlots(parseScheduleToSlots(cls.schedule));
    };

    const handleDeleteClass = async (id, code) => {
        if (window.confirm(`⚠️ Bạn có chắc chắn muốn HỦY LỚP và XÓA lớp học phần [${code}] không?\nTất cả lịch học và danh sách sinh viên đăng ký lớp này sẽ bị hủy bỏ.`)) {
            try {
                await axiosClient.delete(`/course-classes/${id}`);
                alert('Đã xóa bỏ hoàn toàn lớp học phần khỏi hệ thống!');
                loadCourseClasses();
            } catch (err) { alert(err || 'Không thể xóa lớp học phần này!'); }
        }
    };

    return (
        <div style={{ color: 'var(--text-main)' }}>
            <h2 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-xl)' }}>🏛️ TRUNG TÂM ĐIỀU PHỐI ĐÀO TẠO & LỊCH TRÌNH ĐỒNG BỘ</h2>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={() => setSubTab('departments')} style={{ ...subTabBtn, backgroundColor: subTab === 'departments' ? 'var(--color-primary)' : 'var(--color-surface)' }}>Quản Lý Khoa</button>
                <button onClick={() => setSubTab('subjects')} style={{ ...subTabBtn, backgroundColor: subTab === 'subjects' ? 'var(--color-primary)' : 'var(--color-surface)' }}>Quản Lý Môn Học</button>
                <button onClick={() => setSubTab('classes')} style={{ ...subTabBtn, backgroundColor: subTab === 'classes' ? 'var(--color-primary)' : 'var(--color-surface)' }}>Lớp Học Phần & Xếp Lịch</button>
            </div>

            {/* PHÂN HỆ QUẢN LÝ KHOA */}
            {subTab === 'departments' && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSaveDept} style={formStyle}>
                        <h4>{isEditMode ? '📝 HIỆU CHỈNH THÔNG TIN KHOA' : '➕ THÊM KHOA CHUYÊN MÔN MỚI'}</h4>
                        <input type="text" placeholder="Mã Khoa (VD: CNTT)" value={deptForm.code} onChange={e => setDeptForm({...deptForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                        <input type="text" placeholder="Tên Khoa (VD: Công nghệ thông tin)" value={deptForm.name} onChange={e => setDeptForm({...deptForm, name: e.target.value})} required style={inputStyle} />
                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                            {isEditMode && <button type="button" onClick={resetAllForms} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                        </div>
                    </form>
                    <div style={{ flex: 1, minWidth: '350px' }}>
                        <table style={tableStyle}>
                            <thead><tr style={thStyle}><th>ID</th><th>Mã Khoa</th><th>Tên Khoa</th><th style={{textAlign:'center'}}>Hành Động</th></tr></thead>
                            <tbody>
                            {departments.map(d => (
                                <tr key={d.id} style={trStyle}>
                                    <td>{d.id}</td><td style={{color:'var(--text-cyan)', fontWeight:'bold'}}>{d.code}</td><td>{d.name}</td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => handleOpenEditDept(d)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDeleteDept(d.id, d.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* PHÂN HỆ QUẢN LÝ MÔN HỌC */}
            {subTab === 'subjects' && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSaveSubject} style={formStyle}>
                        <h4>{isEditMode ? '📝 HIỆU CHỈNH THÔNG TIN MÔN' : '➕ THÊM MÔN HỌC HỆ THỐNG'}</h4>
                        <input type="text" placeholder="Mã Môn Học (VD: INT3110)" value={subjectForm.code} onChange={e => setSubjectForm({...subjectForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                        <input type="text" placeholder="Tên Môn Học (VD: Lập trình Spring Boot)" value={subjectForm.name} onChange={e => setSubjectForm({...subjectForm, name: e.target.value})} required style={inputStyle} />
                        <input type="number" placeholder="Số tín chỉ" value={subjectForm.credits} onChange={e => setSubjectForm({...subjectForm, credits: e.target.value})} required style={inputStyle} />
                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                            {isEditMode && <button type="button" onClick={resetAllForms} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                        </div>
                    </form>
                    <div style={{ flex: 1, minWidth: '350px' }}>
                        <table style={tableStyle}>
                            <thead><tr style={thStyle}><th>ID</th><th>Mã Môn</th><th>Tên Môn Học</th><th>Tín Chỉ</th><th style={{textAlign:'center'}}>Hành Động</th></tr></thead>
                            <tbody>
                            {subjects.map(s => (
                                <tr key={s.id} style={trStyle}>
                                    <td>{s.id}</td><td style={{color:'var(--color-warning)', fontWeight:'bold'}}>{s.code}</td><td>{s.name}</td><td>{s.credits} tín</td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => handleOpenEditSubject(s)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDeleteSubject(s.id, s.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* PHÂN HỆ LỚP HỌC PHẦN ĐAN XEN BUỔI ĐỘNG */}
            {subTab === 'classes' && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSaveClass} style={{ ...formStyle, width: '460px' }}>
                        <h4>{isEditMode ? '📝 ĐIỀU CHỈNH LỚP HỌC PHẦN & LỊCH BIỂU' : '📅 MỞ LỚP HỌC PHẦN & XẾP LỊCH TRÌNH'}</h4>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <input type="text" placeholder="Mã Lớp HP (VD: LHP_CNPM_01)" value={classForm.code} onChange={e => setClassForm({...classForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                            <input type="text" placeholder="Học kỳ (VD: HK1-2026)" value={classForm.semester} onChange={e => setClassForm({...classForm, semester: e.target.value})} required style={inputStyle} />
                        </div>

                        <select value={classForm.subjectId} onChange={e => setClassForm({...classForm, subjectId: e.target.value})} required style={inputStyle}>
                            <option value="">-- Chọn Môn Học --</option>
                            {subjects.map(s => <option key={s.id} value={s.id}>{s.name} ({s.code})</option>)}
                        </select>

                        <select value={classForm.teacherId} onChange={e => setClassForm({...classForm, teacherId: e.target.value})} required style={inputStyle}>
                            <option value="">-- Chọn Giảng Viên Đứng Lớp --</option>
                            {teachers.map(t => <option key={t.id} value={t.id}>{t.lastName} {t.firstName} ({t.teacherCode})</option>)}
                        </select>

                        <input type="number" placeholder="Sĩ số tối đa" value={classForm.maxStudents} onChange={e => setClassForm({...classForm, maxStudents: e.target.value})} required style={inputStyle} />

                        {/* Cấu phần buổi học động */}
                        <div style={{ padding: '12px', backgroundColor: 'var(--color-bg)', borderRadius: '6px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>📆 Cấu hình chi tiết các buổi học:</label>
                                <button type="button" onClick={handleAddSlot} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>
                                    + Thêm buổi học
                                </button>
                            </div>

                            {scheduleSlots.map((slot, index) => (
                                <div key={index} style={{ display: 'flex', gap: '6px', alignItems: 'center', backgroundColor: 'var(--color-surface)', padding: '8px', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                                    <select value={slot.day} onChange={e => handleSlotChange(index, 'day', e.target.value)} style={{ ...inputStyle, padding: '5px', fontSize: '12px', flex: 1 }}>
                                        {daysOfWeek.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>

                                    <select value={slot.shift} onChange={e => handleSlotChange(index, 'shift', e.target.value)} style={{ ...inputStyle, padding: '5px', fontSize: '12px', flex: 1.5 }}>
                                        {shifts.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>

                                    <input type="text" placeholder="Phòng" value={slot.room} onChange={e => handleSlotChange(index, 'room', e.target.value)} required style={{ ...inputStyle, padding: '5px', fontSize: '12px', width: '80px' }} />

                                    <button type="button" onClick={() => handleRemoveSlot(index)} disabled={scheduleSlots.length === 1} style={{ padding: '5px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                                        Xóa
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật Lớp' : 'Mở Lớp Học Phần'}</button>
                            {isEditMode && <button type="button" onClick={resetAllForms} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy bỏ</button>}
                        </div>
                    </form>

                    <div style={{ flex: 1, minWidth: '450px' }}>
                        <table style={tableStyle}>
                            <thead><tr style={thStyle}><th>Mã Lớp HP</th><th>Môn Học</th><th>Giảng Viên</th><th>Thời Khóa Biểu Đồng Bộ</th><th style={{textAlign:'center'}}>Hành Động</th></tr></thead>
                            <tbody>
                            {courseClasses.map(c => (
                                <tr key={c.id} style={trStyle}>
                                    <td style={{fontWeight:'bold', color:'var(--text-cyan)'}}>{c.code}</td>
                                    <td>{c.subjectName}</td><td>{c.teacherName || 'Chưa xếp'}</td>
                                    <td style={{color:'var(--color-warning)', fontWeight:'bold', fontSize: '12px'}}>{c.schedule || 'Chưa xếp lịch'}</td>
                                    <td style={{textAlign:'center', display:'flex', gap:'4px', justifyContent:'center', padding:'12px 4px'}}>
                                        <button onClick={() => handleOpenEditClass(c)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDeleteClass(c.id, c.code)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

const subTabBtn = { padding: '8px 16px', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
const formStyle = { width: '320px', display: 'flex', flexDirection: 'column', gap: '12px', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' };
const inputStyle = { padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const submitBtnStyle = { padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 };
const actionBtnStyle = { padding: '3px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };

export default TrainingPage;
</file>

<file path="student-management-ui/vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/AuthenticationController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.service.impl.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ApiResponse<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        var result = authenticationService.authenticate(request);
        return new ApiResponse<>(1000, "Đăng nhập hệ thống thành công!", result);
    }

    @PostMapping("/change-password")
    public ApiResponse<String> changePassword(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String newPassword = request.get("newPassword");
        authenticationService.changePasswordFirstLogin(username, newPassword);
        return new ApiResponse<>(1000, "Đổi mật khẩu lần đầu thành công!", "Mật khẩu mới đã được áp dụng.");
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/GradeController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeService gradeService;

    @PostMapping
    public ApiResponse<GradeResponse> inputGrade(@RequestBody @Valid GradeRequest request) {
        return new ApiResponse<>(1000, "Nhập và quy đổi điểm số thành công!", gradeService.inputGrade(request));
    }

    @GetMapping("/student/{studentId}")
    public ApiResponse<List<GradeResponse>> getGradesByStudent(@PathVariable String studentId) { // 🔥 String
        return new ApiResponse<>(1000, "Lấy bảng điểm chi tiết của sinh viên thành công!", gradeService.getGradesByStudent(studentId));
    }

    @PutMapping("/{id}")
    public ApiResponse<GradeResponse> updateGrade(@PathVariable Long id, @RequestBody @Valid GradeRequest request) {
        return new ApiResponse<>(1000, "Sửa đổi và cập nhật lại điểm số thành công!", gradeService.updateGrade(id, request));
    }

    @GetMapping
    public ApiResponse<List<GradeResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy toàn bộ danh sách điểm thành công!", gradeService.getAllGrades());
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteGrade(@PathVariable Long id) {
        gradeService.deleteGrade(id);
        return new ApiResponse<>(1000, "Xóa đầu điểm thành công!", "Đầu điểm có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }

    @GetMapping("/student/{studentId}/summary")
    public ApiResponse<StudentAcademicSummaryResponse> getAcademicSummary(@PathVariable String studentId) { // 🔥 String
        return new ApiResponse<>(1000, "Tổng hợp kết quả học tập và tính GPA thành công!", gradeService.getAcademicSummary(studentId));
    }

    @GetMapping("/{id}")
    public ApiResponse<GradeResponse> getGradeById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy chi tiết thông tin điểm số thành công!", gradeService.getGradeById(id));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/RegistrationController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.RegistrationPeriod;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.mapper.StudentMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.RegistrationPeriodRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.impl.RegistrationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registration")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationServiceImpl registrationService;
    private final RegistrationPeriodRepository periodRepository;
    private final CourseClassRepository courseClassRepository;
    private final GradeRepository gradeRepository;
    private final UserRepository userRepository;
    private final CourseClassMapper courseClassMapper;
    private final StudentMapper studentMapper;

    @PostMapping("/periods")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> createPeriod(@RequestBody RegistrationPeriod period) {
        period.setIsActive(true);
        return new ApiResponse<>(1000, "Mo cong dang ky tin chi thanh cong", periodRepository.save(period));
    }

    @GetMapping("/periods")
    // 🔥 ĐÃ SỬA: Cho phép cả Học sinh và Giáo viên gọi API này để xem lịch đóng/mở cổng công khai
    @PreAuthorize("hasAnyRole('ADMIN', 'STUDENT', 'TEACHER')")
    public ApiResponse<List<RegistrationPeriod>> getPeriods() {
        return new ApiResponse<>(1000, "Lay danh sach cong dang ky thanh cong", periodRepository.findAll());
    }

    @PutMapping("/periods/{id}/open")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> openPeriod(@PathVariable Long id) {
        RegistrationPeriod period = periodRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.VALIDATION_ERROR));
        period.setIsActive(true);
        return new ApiResponse<>(1000, "Da mo cong dang ky", periodRepository.save(period));
    }

    @PutMapping("/periods/{id}/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> closePeriod(@PathVariable Long id) {
        RegistrationPeriod period = periodRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.VALIDATION_ERROR));
        period.setIsActive(false);
        return new ApiResponse<>(1000, "Da dong cong dang ky", periodRepository.save(period));
    }

    @GetMapping("/statistics")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<List<CourseClassStatResponse>> getStats() {
        return new ApiResponse<>(1000, "Tai thong ke dang ky thanh cong", courseClassRepository.getRegistrationStatistics());
    }

    @PutMapping("/course-class/{id}/toggle")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> toggleCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(!courseClass.isOpenForRegistration());
        return new ApiResponse<>(1000, "Cap nhat trang thai lop hoc phan thanh cong",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @PutMapping("/course-class/{id}/open")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> openCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(true);
        return new ApiResponse<>(1000, "Da mo lop hoc phan cho dang ky",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @PutMapping("/course-class/{id}/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> closeCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(false);
        return new ApiResponse<>(1000, "Da dong lop hoc phan",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @GetMapping("/teacher/{teacherId}/classes")
    @PreAuthorize("hasRole('TEACHER')")
    public ApiResponse<List<CourseClassResponse>> getTeacherClasses(@PathVariable String teacherId) {
        assertTeacherSelf(teacherId);
        List<CourseClassResponse> list = courseClassRepository.findByTeacherId(teacherId).stream()
                .map(this::toResponseWithCount)
                .toList();
        return new ApiResponse<>(1000, "Tai lich giang day thanh cong", list);
    }

    @GetMapping("/classes/{classId}/students")
    @PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
    public ApiResponse<List<StudentResponse>> getStudentsInCourseClass(@PathVariable Long classId) {
        assertTeacherAssignedIfNeeded(classId);
        List<StudentResponse> list = gradeRepository.findByCourseClassId(classId).stream()
                .map(g -> studentMapper.toResponse(g.getStudent()))
                .toList();
        return new ApiResponse<>(1000, "Tai danh sach sinh vien lop hoc phan thanh cong", list);
    }

    @GetMapping("/open-course-classes")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<List<CourseClassResponse>> getOpenCourseClasses() {
        return new ApiResponse<>(1000, "Tai danh sach lop hoc phan dang mo thanh cong",
                registrationService.getOpenCourseClasses());
    }

    @GetMapping("/my-classes")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<List<GradeResponse>> getMyRegisteredClasses() {
        return new ApiResponse<>(1000, "Tai danh sach lop hoc phan da dang ky thanh cong",
                registrationService.getCurrentStudentRegistrations());
    }

    @PostMapping("/enroll")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<String> enroll(@RequestParam Long courseClassId) {
        registrationService.registerCourseClass(courseClassId);
        return new ApiResponse<>(1000, "Dang ky lop hoc phan thanh cong", "OK");
    }

    @DeleteMapping("/unenroll")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<String> unenroll(@RequestParam Long courseClassId) {
        registrationService.cancelRegistration(courseClassId);
        return new ApiResponse<>(1000, "Huy dang ky lop hoc phan thanh cong", "OK");
    }

    private CourseClass getCourseClass(Long id) {
        return courseClassRepository.findByIdWithSubjectAndTeacher(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
    }

    private CourseClassResponse toResponseWithCount(CourseClass courseClass) {
        courseClass.setRegisteredStudents(gradeRepository.countByCourseClassId(courseClass.getId()));
        return courseClassMapper.toResponse(courseClass);
    }

    private void assertTeacherSelf(String teacherId) {
        User user = currentUser();
        if (!user.getId().equals(teacherId)) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }
    }

    private void assertTeacherAssignedIfNeeded(Long courseClassId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean isTeacher = authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_TEACHER"));
        if (!isTeacher) {
            return;
        }

        CourseClass courseClass = getCourseClass(courseClassId);
        String email = authentication.getName();
        if (courseClass.getTeacher() == null
                || courseClass.getTeacher().getUser() == null
                || !email.equalsIgnoreCase(courseClass.getTeacher().getUser().getEmail())) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }
    }

    private User currentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/SubjectController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Đổi import sang DTO Response
import com.dangdepzaivaio.StudentManagement.service.SubjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService subjectService;

    @PostMapping
    public ApiResponse<SubjectResponse> createSubject(@RequestBody @Valid SubjectRequest request) {
        return new ApiResponse<>(1000, "Tạo môn học thành công!", subjectService.createSubject(request));
    }

    @GetMapping
    public ApiResponse<List<SubjectResponse>> getAllSubjects() {
        return new ApiResponse<>(1000, "Lấy danh sách môn học thành công!", subjectService.getAllSubjects());
    }

    @GetMapping("/{subjectId}")
    public ApiResponse<SubjectResponse> getSubject(@PathVariable Long subjectId) {
        return new ApiResponse<>(1000, "Lấy chi tiết môn học thành công!", subjectService.getSubjectById(subjectId));
    }

    @PutMapping("/{subjectId}")
    public ApiResponse<SubjectResponse> updateSubject(@PathVariable Long subjectId, @RequestBody @Valid SubjectRequest request) {
        return new ApiResponse<>(1000, "Cập nhật môn học thành công!", subjectService.updateSubject(subjectId, request));
    }

    @DeleteMapping("/{subjectId}")
    public ApiResponse<String> deleteSubject(@PathVariable Long subjectId) {
        subjectService.deleteSubject(subjectId);
        return new ApiResponse<>(1000, "Xóa môn học thành công!", "Môn học có ID " + subjectId + " đã bị xóa hoàn toàn.");
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/TeacherController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.TeacherUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.service.TeacherService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
public class TeacherController {

    private final TeacherService teacherService;

    @PostMapping
    public ApiResponse<TeacherResponse> createTeacher(@RequestBody @Valid TeacherCreationRequest request) {
        return new ApiResponse<>(1000, "Cap tai khoan giang vien thanh cong", teacherService.createTeacher(request));
    }

    @GetMapping
    public ApiResponse<List<TeacherResponse>> getAll() {
        return new ApiResponse<>(1000, "Lay danh sach giang vien thanh cong", teacherService.getAllTeachers());
    }

    @GetMapping("/{teacherId}")
    public ApiResponse<TeacherResponse> getTeacher(@PathVariable String teacherId) {
        return new ApiResponse<>(1000, "Lay chi tiet giang vien thanh cong", teacherService.getTeacherById(teacherId));
    }

    @PutMapping("/{teacherId}")
    public ApiResponse<TeacherResponse> updateTeacher(@PathVariable String teacherId, @RequestBody @Valid TeacherUpdateRequest request) {
        return new ApiResponse<>(1000, "Cap nhat giang vien thanh cong", teacherService.updateTeacher(teacherId, request));
    }

    @PutMapping("/{teacherId}/enable")
    public ApiResponse<String> enableTeacher(@PathVariable String teacherId) {
        teacherService.enableTeacher(teacherId);
        return new ApiResponse<>(1000, "Mo khoa tai khoan giang vien thanh cong", "ID: " + teacherId);
    }

    @DeleteMapping("/{teacherId}")
    public ApiResponse<String> deleteTeacher(@PathVariable String teacherId) {
        teacherService.disableTeacher(teacherId);
        return new ApiResponse<>(1000, "Khoa tai khoan giang vien thanh cong", "ID: " + teacherId);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/CourseClassRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CourseClassRequest(
        @NotBlank(message = "Ma lop hoc phan khong duoc de trong")
        String code,

        @NotBlank(message = "Hoc ky khong duoc de trong")
        String semester,

        @NotNull(message = "ID mon hoc khong duoc de trong")
        Long subjectId,

        String teacherId,

        @Min(value = 1, message = "Si so toi da phai lon hon 0")
        Integer maxStudents,

        String schedule,

        Boolean openForRegistration
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/GradeRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record GradeRequest(
        @NotNull(message = "ID sinh viên không được để trống")
        String studentId, // 🔥 Đã đổi sang String

        @NotNull(message = "ID lớp học phần không được để trống")
        Long courseClassId,

        @Min(value = 0, message = "Điểm chuyên cần không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm chuyên cần không được lớn hơn 10")
        Double attendanceGrade,

        @Min(value = 0, message = "Điểm giữa kỳ không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm giữa kỳ không được lớn hơn 10")
        Double midtermGrade,

        @Min(value = 0, message = "Điểm cuốii kỳ không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm cuối kỳ không được lớn hơn 10")
        Double finalGrade
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/CourseClassResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record CourseClassResponse(
        Long id,
        String code,
        String semester,
        Long subjectId,
        String subjectCode,
        String subjectName,
        Integer credits,
        String teacherId,
        String teacherName,
        Integer maxStudents,
        long registeredStudents,
        String schedule,
        boolean openForRegistration
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentAcademicSummaryResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.List;

public record StudentAcademicSummaryResponse(
        String studentId,        // 🔥 Đã đổi sang String
        String studentCode,
        String studentName,
        String className,
        List<GradeResponse> details,
        Integer totalCredits,
        Double gpaSystem10,
        Double gpaSystem4
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/TeacherResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record TeacherResponse(
        String id,          // PHẢI LÀ String
        String teacherCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean active,
        String username,
        String email,
        String departmentName
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/UserResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.Set;

public record UserResponse(
        String id, // 🔥 Đã đổi sang String
        String username,
        String email,
        boolean active,
        Set<String> roles
) {}
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

    // BỔ SUNG THÊM DÒNG NÀY
    @Column(name = "grade_4")
    private Double grade4; // Điểm số hệ 4 (Ví dụ: 3.5, 4.0)
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/RegistrationPeriod.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "registration_periods")
public class RegistrationPeriod extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "semester", nullable = false, length = 20)
    private String semester; // Ví dụ: HK1-2026

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalDateTime endTime;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive = true;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Teacher.java">
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
@Table(name = "teachers")
public class Teacher extends BaseEntity {

    @Id
    @Column(name = "id", length = 20)
    private String id; // 🔥 Khóa chính kiểu Chuỗi đồng bộ với User

    @Column(name = "teacher_code", nullable = false, unique = true, length = 20)
    private String teacherCode;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "phone_number", length = 15)
    private String phoneNumber;

    @Builder.Default
    @Column(name = "is_active", nullable = false)
    private boolean isActive = true;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId // 🔥 Ép khóa chính trùng vẹn với User liên kết
    @JoinColumn(name = "id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/CourseClassMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface CourseClassMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    @Mapping(target = "teacher", ignore = true)
    @Mapping(target = "registeredStudents", ignore = true)
    CourseClass toEntity(CourseClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    @Mapping(target = "teacher", ignore = true)
    @Mapping(target = "registeredStudents", ignore = true)
    void updateEntityFromRequest(CourseClassRequest request, @MappingTarget CourseClass courseClass);

    default CourseClassResponse toResponse(CourseClass courseClass) {
        if (courseClass == null) {
            return null;
        }

        Subject subject = courseClass.getSubject();
        Teacher teacher = courseClass.getTeacher();
        String teacherName = teacher == null
                ? null
                : (safe(teacher.getLastName()) + " " + safe(teacher.getFirstName())).trim();

        return new CourseClassResponse(
                courseClass.getId(),
                courseClass.getCode(),
                courseClass.getSemester(),
                subject == null ? null : subject.getId(),
                subject == null ? null : subject.getCode(),
                subject == null ? null : subject.getName(),
                subject == null ? null : subject.getCredits(),
                teacher == null ? null : teacher.getId(),
                teacherName == null || teacherName.isBlank() ? null : teacherName,
                courseClass.getMaxStudents(),
                courseClass.getRegisteredStudents(),
                courseClass.getSchedule(),
                courseClass.isOpenForRegistration()
        );
    }

    private static String safe(String value) {
        return value == null ? "" : value;
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/GradeMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface GradeMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "student", ignore = true)
    @Mapping(target = "courseClass", ignore = true)
    Grade toEntity(GradeRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "student", ignore = true)
    @Mapping(target = "courseClass", ignore = true)
    void updateEntityFromRequest(GradeRequest request, @MappingTarget Grade grade);

    @Mapping(target = "studentId", source = "student.id")
    @Mapping(target = "studentCode", source = "student.studentCode")
    @Mapping(target = "studentName", expression = "java(grade.getStudent().getFirstName() + \" \" + grade.getStudent().getLastName())")
    @Mapping(target = "courseClassId", source = "courseClass.id")
    @Mapping(target = "courseClassCode", source = "courseClass.code")
    @Mapping(target = "subjectName", source = "courseClass.subject.name")
    @Mapping(target = "credits", source = "courseClass.subject.credits")
    @Mapping(target = "teacherName", expression = "java(grade.getCourseClass().getTeacher() != null ? grade.getCourseClass().getTeacher().getLastName() + \" \" + grade.getCourseClass().getTeacher().getFirstName() : \"Chưa phân công\")")
    @Mapping(target = "schedule", source = "courseClass.schedule")
    GradeResponse toResponse(Grade grade);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/SubjectMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Thêm import này
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SubjectMapper {

    @Mapping(target = "id", ignore = true)
    Subject toEntity(SubjectRequest request);

    @Mapping(target = "id", ignore = true)
    void updateEntityFromRequest(SubjectRequest request, @MappingTarget Subject subject);

    // BỔ SUNG HÀM NÀY: Chuyển đổi thực thể sang DTO phẳng sạch sẽ
    SubjectResponse toResponse(Subject subject);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/UserMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "roles", source = "roles")
    UserResponse toResponse(User user);

    // Hàm chuyển đổi custom: Ép danh sách thực thể Role thành bộ tên chuỗi gọn gàng
    default Set<String> mapRoles(Set<Role> roles) {
        if (roles == null) return null;
        return roles.stream()
                .map(Role::getName)
                .collect(Collectors.toSet());
    }
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
    boolean existsByDepartmentId(Long departmentId);
    @org.springframework.data.jpa.repository.Query("SELECT c FROM Class c JOIN FETCH c.department")
    List<Class> findAllClassesWithJoinFetch();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/RegistrationPeriodRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.RegistrationPeriod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface RegistrationPeriodRepository extends JpaRepository<RegistrationPeriod, Long> {

    @Query("SELECT r FROM RegistrationPeriod r WHERE r.semester = :semester AND r.isActive = true " +
            "AND :now BETWEEN r.startTime AND r.endTime")
    Optional<RegistrationPeriod> findActivePeriod(@Param("semester") String semester, @Param("now") LocalDateTime now);
    List<RegistrationPeriod> findAllByIsActiveTrue();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/TeacherRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, String> {
    boolean existsByTeacherCode(String teacherCode);
    Optional<Teacher> findByTeacherCode(String teacherCode);

    @Query("SELECT t FROM Teacher t JOIN FETCH t.user JOIN FETCH t.department")
    List<Teacher> findAllTeachersWithJoinFetch();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/GradeService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import java.util.List;

public interface GradeService {
    GradeResponse inputGrade(GradeRequest request);
    List<GradeResponse> getGradesByStudent(String studentId); // 🔥 Sửa sang String
    GradeResponse updateGrade(Long id, GradeRequest request);
    List<GradeResponse> getAllGrades();
    GradeResponse getGradeById(Long id);
    void deleteGrade(Long id);
    StudentAcademicSummaryResponse getAcademicSummary(String studentId); // 🔥 Sửa sang String
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/ClassServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.ClassMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassServiceImpl implements ClassService {
    // 🔥 ĐÃ GOM TOÀN BỘ KHAI BÁO LÊN ĐẦU CLASS THEO ĐÚNG CHUẨN LOMBOK
    private final ClassRepository classRepository;
    private final DepartmentRepository departmentRepository;
    private final StudentRepository studentRepository;
    private final ClassMapper classMapper;

    @Override
    @Transactional
    public ClassResponse createClass(ClassRequest request) {
        if (classRepository.existsByName(request.name())) {
            throw new AppException(ErrorCode.CLASS_EXISTED);
        }
        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        Class studentClass = classMapper.toEntity(request);
        studentClass.setDepartment(department);
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
    public List<ClassResponse> getAllClasses() {
        return classRepository.findAllClassesWithJoinFetch().stream()
                .map(classMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public ClassResponse updateClass(Long id, ClassRequest request) {
        Class studentClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        if (!studentClass.getName().equals(request.name()) && classRepository.existsByName(request.name())) {
            throw new AppException(ErrorCode.CLASS_EXISTED);
        }

        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        classMapper.updateEntityFromRequest(request, studentClass);
        studentClass.setDepartment(department);
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
    @Transactional
    public void deleteClass(Long id) {
        Class studentClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        if (studentRepository.existsByStudentClassId(id)) {
            throw new AppException(ErrorCode.CLASS_HAS_STUDENTS);
        }

        classRepository.delete(studentClass);
    }

    @Override
    public ClassResponse getClassById(Long id) {
        Class adminClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));
        return classMapper.toResponse(adminClass);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/TeacherServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.TeacherUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.TeacherMapper;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;
    private final DepartmentRepository departmentRepository;
    private final RoleRepository roleRepository;
    private final TeacherMapper teacherMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public TeacherResponse createTeacher(TeacherCreationRequest request) {
        if (teacherRepository.existsByTeacherCode(request.teacherCode())) {
            throw new AppException(ErrorCode.TEACHER_CODE_EXISTED);
        }

        Department dept = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        long nextIndex = userRepository.countByIdStartingWith("GV_") + 1;
        String generatedId = String.format("GV_%02d", nextIndex);

        User user = User.builder()
                .id(generatedId)
                .username(request.teacherCode())
                .password(passwordEncoder.encode("password1234"))
                .email(request.teacherCode().toLowerCase() + "@open.edu.vn")
                .isActive(true)
                .build();

        Role teacherRole = roleRepository.findByName("TEACHER")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(teacherRole));

        // 🔥 SỬA DÒNG NÀY: Hứng lấy đối tượng Managed trả về từ hàm save()
        User managedUser = userRepository.save(user);

        Teacher teacher = teacherMapper.toEntity(request);

        // 🔥 SỬA DÒNG NÀY: Gắn đối tượng managedUser (đã an toàn) vào thay vì biến user gốc
        teacher.setUser(managedUser);

        teacher.setDepartment(dept);
        teacher.setActive(true);

        return teacherMapper.toResponse(teacherRepository.save(teacher));
    }

    @Override
    public List<TeacherResponse> getAllTeachers() {
        return teacherRepository.findAllTeachersWithJoinFetch().stream()
                .map(teacherMapper::toResponse)
                .toList();
    }

    @Override
    public TeacherResponse getTeacherById(String id) {
        return teacherRepository.findById(id)
                .map(teacherMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
    }

    @Override
    @Transactional
    public TeacherResponse updateTeacher(String id, TeacherUpdateRequest request) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));

        teacher.setFirstName(request.firstName());
        teacher.setLastName(request.lastName());
        teacher.setDateOfBirth(request.dateOfBirth());
        teacher.setGender(request.gender());
        teacher.setPhoneNumber(request.phoneNumber());

        return teacherMapper.toResponse(teacherRepository.save(teacher));
    }

    @Override
    @Transactional
    public void disableTeacher(String id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
        teacher.setActive(false);
        if (teacher.getUser() != null) teacher.getUser().setActive(false);
        teacherRepository.save(teacher);
    }

    @Override
    @Transactional
    public void enableTeacher(String id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
        teacher.setActive(true);
        if (teacher.getUser() != null) teacher.getUser().setActive(true);
        teacherRepository.save(teacher);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/SubjectService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Sửa import này
import java.util.List;

public interface SubjectService {
    SubjectResponse createSubject(SubjectRequest request);
    List<SubjectResponse> getAllSubjects();
    SubjectResponse getSubjectById(Long id);
    SubjectResponse updateSubject(Long id, SubjectRequest request);
    void deleteSubject(Long id);
}
</file>

<file path="student-management-ui/README.md">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Tiến độ Dự án (Project Progress)
Markdown
- [x] Đồng bộ toàn vẹn cấu trúc mã chuỗi tự sinh (AD, HS_xx, GV_xx) ở cả 2 phân hệ.
- [x] Chuyển đổi luồng xác thực bảo mật hệ thống sang Email trường cấp (`@open.edu.vn`).
- [x] Xây dựng phân hệ Đăng ký tín chỉ Realtime (Tự động mở/đóng cổng, thống kê lớp học phần).
- [x] Triển khai bộ lắng nghe trạng thái tab (Visibility API) để kiểm soát phiên làm việc 15 phút.
- [x] Dọn dẹp môi trường, tối ưu MapStruct ánh xạ phẳng và dập tắt hoàn toàn log Hibernate SQ
</file>

<file path="student-management-ui/src/pages/LoginPage.jsx">
import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isFirstLoginMode, setIsFirstLoginMode] = useState(false);
    const [tempAuthData, setTempAuthData] = useState(null);

    const [showDropdown, setShowDropdown] = useState(false);
    const [hoveredAcc, setHoveredAcc] = useState('');

    const [savedAccounts, setSavedAccounts] = useState(() => {
        try {
            const saved = localStorage.getItem('savedAccounts');
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await axiosClient.post('/auth/login', { username, password });

            if (data.firstLogin === true || data.isFirstLogin === true) {
                setIsFirstLoginMode(true);
                setTempAuthData(data);
                alert("Hệ thống phát hiện đây là lần đầu bạn đăng nhập. Bạn bắt buộc phải đổi mật khẩu để bảo mật tài khoản!");
            } else {
                processSuccessfulLogin(data);
            }
        } catch (err) {
            setError(err || 'Email hoặc mật khẩu không chính xác!');
        } finally {
            setLoading(false);
        }
    };

    // 🔥 HÀM ĐÃ SỬA LỖI LƯU DỮ LIỆU: Đọc/Ghi trực tiếp từ nguồn LocalStorage loại bỏ Stale Closure
    const processSuccessfulLogin = (data) => {
        const saved = localStorage.getItem('savedAccounts');
        let accounts = saved ? JSON.parse(saved) : [];

        // Chuẩn hóa chuỗi Email lấy trực tiếp từ ô Input vừa nhập thành công
        const emailToSave = username.trim().toLowerCase();

        if (emailToSave && !accounts.includes(emailToSave)) {
            accounts.push(emailToSave);
            localStorage.setItem('savedAccounts', JSON.stringify(accounts));
            setSavedAccounts(accounts);
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('roles', data.roles);
        localStorage.setItem('userId', data.userId);

        if (data.studentId) localStorage.setItem('studentId', data.studentId);
        if (data.teacherId) localStorage.setItem('teacherId', data.teacherId);

        window.location.href = '/';
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword.length < 6) {
            setError('Mật khẩu mới phải từ 6 ký tự trở lên!');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Mật khẩu xác nhận không trùng khớp!');
            return;
        }

        try {
            setLoading(true);
            await axiosClient.post('/auth/change-password', { username, newPassword });
            alert('Đổi mật khẩu thành công mượt mà! Hệ thống sẽ tự động đăng nhập cho bạn.');

            if (tempAuthData) {
                processSuccessfulLogin(tempAuthData);
            }
        } catch (err) {
            setError(err || 'Có lỗi phát sinh khi đổi mật khẩu. Vui lòng thử lại!');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveSavedAccount = (accToRemove) => {
        const newAccounts = savedAccounts.filter(acc => acc !== accToRemove);
        setSavedAccounts(newAccounts);
        localStorage.setItem('savedAccounts', JSON.stringify(newAccounts));
        if (username === accToRemove) setUsername('');
    };

    const filteredAccounts = savedAccounts.filter(acc => acc.toLowerCase().includes(username.toLowerCase()));

    return (
        <div style={{ maxWidth: '400px', margin: '100px auto', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--text-main)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>

            {isFirstLoginMode ? (
                <form onSubmit={handleChangePassword}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-warning)' }}>🔒 ĐỔI MẬT KHẨU LẦN ĐẦU</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Mật khẩu mới:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} style={eyeButtonStyle}>
                                {showNewPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Xác nhận mật khẩu mới:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={eyeButtonStyle}>
                                {showConfirmPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Đang xử lý...' : 'Xác Nhận & Đăng Nhập'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleLogin}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--text-cyan)' }}>ĐĂNG NHẬP HỆ THỐNG</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    {/* CLICK TEXT TỰ ĐỘNG SỔ DROPDOWN */}
                    <div style={{ marginBottom: 'var(--spacing-lg)', position: 'relative' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Email đăng nhập (@open.edu.vn):</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => setShowDropdown(true)}
                            onClick={() => setShowDropdown(true)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                            autoComplete="off"
                            required
                            style={inputStyleForUsername}
                        />

                        {showDropdown && (
                            <div style={dropdownPanelStyle}>
                                {filteredAccounts.length > 0 ? (
                                    filteredAccounts.map(acc => (
                                        <div
                                            key={acc}
                                            onClick={() => { setUsername(acc); setShowDropdown(false); }}
                                            onMouseEnter={() => setHoveredAcc(acc)}
                                            onMouseLeave={() => setHoveredAcc('')}
                                            style={{
                                                ...dropdownItemStyle,
                                                backgroundColor: hoveredAcc === acc ? 'var(--color-surface-hover)' : 'transparent',
                                            }}
                                        >
                                            <span style={{ flex: 1, color: hoveredAcc === acc ? 'var(--text-cyan)' : 'var(--text-main)' }}>👤 {acc}</span>
                                            <span
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveSavedAccount(acc);
                                                }}
                                                style={{ color: 'var(--color-danger)', fontWeight: 'bold', padding: '0 8px', fontSize: '15px' }}
                                                title="Xóa tài khoản này khỏi bộ nhớ"
                                            >
                                                &times;
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ padding: '12px', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
                                        {savedAccounts.length === 0 ? 'Chưa có lịch sử đăng nhập nào.' : 'Không tìm thấy tài khoản phù hợp.'}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Mật khẩu:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeButtonStyle}>
                                {showPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Đang xác thực...' : 'Đăng Nhập'}
                    </button>
                </form>
            )}
        </div>
    );
}

const dropdownPanelStyle = { position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', zIndex: 99, maxHeight: '160px', overflowY: 'auto', boxShadow: '0 8px 16px rgba(0,0,0,0.4)', marginTop: '4px' };
const dropdownItemStyle = { padding: '10px 12px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--color-border)', transition: 'all 0.1s ease' };
const inputStyle = { width: '100%', padding: '10px 12px', paddingRight: '40px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
const inputStyleForUsername = { width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
const eyeButtonStyle = { position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', padding: 0, userSelect: 'none' };
const buttonStyle = { width: '100%', padding: '12px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' };

export default LoginPage;
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    ApplicationRunner initRolesAndResetPasswords() {
        return args -> {
            // 1. Khởi tạo các Role mặc định nếu chưa có
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
                log.info("Đã khởi tạo Role: ADMIN");
            }
            if (roleRepository.findByName("TEACHER").isEmpty()) {
                roleRepository.save(Role.builder().name("TEACHER").build());
                log.info("Đã khởi tạo Role: TEACHER");
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
                log.info("Đã khởi tạo Role: STUDENT");
            }

            // 2. ✅ FIX: Chỉ reset mật khẩu về mặc định cho những tài khoản CHƯA TỪNG đăng nhập
            // (isFirstLogin = true). Điều này vẫn có thể reset pass của user chưa đổi khi restart,
            // nhưng đây là hành vi cố ý để đảm bảo pass mặc định luôn đúng khi deploy mới.
            //
            // ⚠️  LƯU Ý PRODUCTION: Nếu không muốn reset pass mỗi lần restart,
            //     hãy comment toàn bộ block bên dưới sau lần deploy đầu tiên.
            List<User> users = userRepository.findAll();
            int resetCount = 0;
            for (User user : users) {
                if (user.isFirstLogin()) {
                    user.setPassword(passwordEncoder.encode("password1234"));
                    userRepository.save(user);
                    resetCount++;
                }
            }
            if (resetCount > 0) {
                log.warn("DatabaseInitializer: Đã reset mật khẩu mặc định cho {} tài khoản chưa đổi pass. " +
                        "Xem xét tắt tính năng này sau khi deploy production.", resetCount);
            }
        };
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

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

        // 🔥 THÊM MỚI: Đón nhận niên khóa học truyền từ form tạo
        @NotBlank(message = "Khóa học sinh viên không được để trống")
        String cohort
) {}
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
        Long classId,
        Boolean active,

        // 🔥 THÊM MỚI: Cho phép sửa đổi đợt khóa học khi hiệu chỉnh hồ sơ
        String cohort
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/AuthenticationResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import lombok.Builder;
import java.util.Set;

@Builder
public record AuthenticationResponse(
        String token,
        boolean authenticated,
        String userId,     // 🔥 Đã đổi sang String
        String username,
        Set<String> roles,
        boolean isFirstLogin,
        String studentId,  // 🔥 Đã đổi sang String
        String teacherId   // 🔥 Đã đổi sang String
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/GradeResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record GradeResponse(
        Long id,
        String studentId,
        String studentCode,
        String studentName,
        Long courseClassId,
        String courseClassCode,
        String subjectName,
        Integer credits,       // 🔥 THÊM MỚI: Số tín chỉ môn học
        String teacherName,    // 🔥 THÊM MỚI: Tên giảng viên đứng lớp
        String schedule,       // 🔥 THÊM MỚI: Lịch học thiết kế (Thứ, Tiết, Phòng)
        Double attendanceGrade,
        Double midtermGrade,
        Double finalGrade,
        Double overallGrade,
        String letterGrade,
        Double grade4
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record StudentResponse(
        String id,
        String studentCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean active,
        String username,
        String email,
        Long classId,
        String className,

        // 🔥 THÊM MỚI: Trường dữ liệu phản hồi khóa học từ Database thật ra ngoài UI
        String cohort,
        String departmentName
) {}
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
    private String code;

    @Column(name = "semester", nullable = false, length = 20)
    private String semester;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @Builder.Default
    @Column(name = "max_students", nullable = false)
    private Integer maxStudents = 60;

    @Column(name = "schedule", length = 120)
    private String schedule;

    @Builder.Default
    @Column(name = "is_open", nullable = false)
    private boolean openForRegistration = false;

    @Transient
    private long registeredStudents;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/CourseClassRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseClassRepository extends JpaRepository<CourseClass, Long> {
    boolean existsByCode(String code);
    boolean existsBySubjectId(Long subjectId);

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user")
    List<CourseClass> findAllWithSubjectAndTeacher();

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE cc.id = :id")
    Optional<CourseClass> findByIdWithSubjectAndTeacher(@Param("id") Long id);

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE t.id = :teacherId")
    List<CourseClass> findByTeacherId(@Param("teacherId") String teacherId);

    List<CourseClass> findBySemester(String semester);

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE cc.openForRegistration = true")
    List<CourseClass> findByOpenForRegistrationTrue();

    @Query("SELECT new com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse(" +
            "cc.id, cc.code, s.name, CONCAT(COALESCE(t.lastName, ''), ' ', COALESCE(t.firstName, '')), " +
            "COUNT(g.id), cc.semester, cc.maxStudents, cc.openForRegistration) " +
            "FROM CourseClass cc " +
            "JOIN cc.subject s " +
            "LEFT JOIN cc.teacher t " +
            "LEFT JOIN Grade g ON g.courseClass.id = cc.id " +
            "GROUP BY cc.id, cc.code, s.name, t.lastName, t.firstName, cc.semester, cc.maxStudents, cc.openForRegistration")
    List<CourseClassStatResponse> getRegistrationStatistics();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/UserRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);

    // 🔥 THÊM MỚI: Tìm kiếm tài khoản người dùng bằng Email
    Optional<User> findByEmail(String email);

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    long countByIdStartingWith(String prefix);

    // 🔥 BỔ SUNG: Hàm lấy danh sách các tài khoản đang hoạt động (isActive = true)
    List<User> findByIsActiveTrue();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/AuthenticationService.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.signer-key}")
    private String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        // 🔥 THAY ĐỔI: Tìm kiếm bằng Email thay vì Username (Mã số) cũ
        User user = userRepository.findByEmail(request.username())
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        if (!user.isActive()) {
            throw new AppException(ErrorCode.ACCOUNT_LOCKED);
        }

        boolean authenticated = passwordEncoder.matches(request.password(), user.getPassword());
        if (!authenticated) throw new AppException(ErrorCode.UNAUTHENTICATED);

        String token = generateToken(user);
        Set<String> roles = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.toSet());

        String studentId = null;
        String teacherId = null;

        if (roles.contains("STUDENT")) {
            studentId = studentRepository.findById(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Student::getId).orElse(null);
        } else if (roles.contains("TEACHER")) {
            teacherId = teacherRepository.findById(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Teacher::getId).orElse(null);
        }

        return AuthenticationResponse.builder()
                .token(token)
                .authenticated(true)
                .userId(user.getId())
                .username(user.getEmail()) // Trả về email làm thông tin hiển thị sau đăng nhập
                .roles(roles)
                .isFirstLogin(user.isFirstLogin())
                .studentId(studentId)
                .teacherId(teacherId)
                .build();
    }

    private String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail()) // 🔥 THAY ĐỔI: Lưu Email vào subject của JWT thay vì username
                .issuer("dangdepzaivaio.com")
                .issueTime(new Date())
                .expirationTime(new Date(Instant.now().plus(2, ChronoUnit.HOURS).toEpochMilli()))
                .claim("userId", user.getId())
                .claim("scope", rolesScope)
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException("Không thể tạo token", e);
        }
    }

    // 🔥 SỬA CHỮA: Cập nhật dùng findByEmail để khớp với luồng giao diện React
    public void changePasswordFirstLogin(String username, String newPassword) {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        if (!user.isFirstLogin()) {
            throw new AppException(ErrorCode.VALIDATION_ERROR);
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setFirstLogin(false);
        userRepository.save(user);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/CourseClassServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.SubjectRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.service.CourseClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseClassServiceImpl implements CourseClassService {

    private final CourseClassRepository courseClassRepository;
    private final SubjectRepository subjectRepository;
    private final TeacherRepository teacherRepository;
    private final CourseClassMapper courseClassMapper;
    private final GradeRepository gradeRepository;

    @Override
    @Transactional
    public CourseClassResponse createCourseClass(CourseClassRequest request) {
        if (courseClassRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.COURSE_CLASS_EXISTED);
        }

        Subject subject = subjectRepository.findById(request.subjectId())
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        CourseClass courseClass = courseClassMapper.toEntity(request);
        courseClass.setSubject(subject);
        applyTeacherAndDefaults(courseClass, request);

        return toResponseWithCount(courseClassRepository.save(courseClass));
    }

    @Override
    public List<CourseClassResponse> getAllCourseClasses() {
        return courseClassRepository.findAllWithSubjectAndTeacher().stream()
                .map(this::toResponseWithCount)
                .toList();
    }

    @Override
    public CourseClassResponse getCourseClassById(Long id) {
        CourseClass courseClass = courseClassRepository.findByIdWithSubjectAndTeacher(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
        return toResponseWithCount(courseClass);
    }

    @Override
    @Transactional
    public CourseClassResponse updateCourseClass(Long id, CourseClassRequest request) {
        CourseClass courseClass = courseClassRepository.findByIdWithSubjectAndTeacher(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        if (!courseClass.getCode().equals(request.code()) && courseClassRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.COURSE_CLASS_EXISTED);
        }

        Subject subject = subjectRepository.findById(request.subjectId())
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        courseClassMapper.updateEntityFromRequest(request, courseClass);
        courseClass.setSubject(subject);
        applyTeacherAndDefaults(courseClass, request);

        return toResponseWithCount(courseClassRepository.save(courseClass));
    }

    @Override
    @Transactional
    public void deleteCourseClass(Long id) {
        CourseClass courseClass = courseClassRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        if (gradeRepository.existsByCourseClassId(id)) {
            throw new AppException(ErrorCode.COURSE_CLASS_HAS_GRADES);
        }

        courseClassRepository.delete(courseClass);
    }

    private void applyTeacherAndDefaults(CourseClass courseClass, CourseClassRequest request) {
        if (request.teacherId() == null || request.teacherId().isBlank()) {
            courseClass.setTeacher(null);
        } else {
            Teacher teacher = teacherRepository.findById(request.teacherId())
                    .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
            courseClass.setTeacher(teacher);
        }

        if (courseClass.getMaxStudents() == null || courseClass.getMaxStudents() < 1) {
            courseClass.setMaxStudents(60);
        }

        if (request.openForRegistration() != null) {
            courseClass.setOpenForRegistration(request.openForRegistration());
        }
    }

    private CourseClassResponse toResponseWithCount(CourseClass courseClass) {
        courseClass.setRegisteredStudents(gradeRepository.countByCourseClassId(courseClass.getId()));
        return courseClassMapper.toResponse(courseClass);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/GradeServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.GradeMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;
    private final StudentRepository studentRepository;
    private final CourseClassRepository courseClassRepository;
    private final UserRepository userRepository;
    private final GradeMapper gradeMapper;

    @Override
    @Transactional
    public GradeResponse inputGrade(GradeRequest request) {
        CourseClass courseClass = courseClassRepository.findByIdWithSubjectAndTeacher(request.courseClassId())
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
        assertTeacherAssigned(courseClass);

        Grade grade = gradeRepository.findByStudentIdAndCourseClassId(request.studentId(), request.courseClassId())
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_ENROLLED));

        gradeMapper.updateEntityFromRequest(request, grade);
        calculateAndConvertGrade(grade);

        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public List<GradeResponse> getGradesByStudent(String studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new AppException(ErrorCode.STUDENT_NOT_FOUND);
        }

        Authentication authentication = currentAuthentication();
        if (hasRole(authentication, "ROLE_STUDENT") && !currentUser().getId().equals(studentId)) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        return gradeRepository.findByStudentId(studentId).stream()
                .filter(grade -> !hasRole(authentication, "ROLE_TEACHER") || isAssignedTeacher(grade.getCourseClass(), authentication.getName()))
                .map(gradeMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public GradeResponse updateGrade(Long id, GradeRequest request) {
        Grade grade = gradeRepository.findByIdWithDetails(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        assertTeacherAssigned(grade.getCourseClass());

        gradeMapper.updateEntityFromRequest(request, grade);
        calculateAndConvertGrade(grade);
        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public StudentAcademicSummaryResponse getAcademicSummary(String studentId) {
        Authentication authentication = currentAuthentication();
        Student student = studentRepository.findByIdWithJoinFetch(studentId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        if (hasRole(authentication, "ROLE_STUDENT") && !student.getUser().getEmail().equalsIgnoreCase(authentication.getName())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        List<Grade> grades = gradeRepository.findByStudentId(studentId).stream()
                .filter(grade -> !hasRole(authentication, "ROLE_TEACHER") || isAssignedTeacher(grade.getCourseClass(), authentication.getName()))
                .toList();

        int totalCredits = 0;
        double totalWeightedGrade10 = 0.0;
        double totalWeightedGrade4 = 0.0;

        for (Grade grade : grades) {
            if (grade.getOverallGrade() == null || grade.getGrade4() == null) {
                continue;
            }
            if (grade.getCourseClass() != null && grade.getCourseClass().getSubject() != null) {
                int credits = grade.getCourseClass().getSubject().getCredits();
                totalCredits += credits;
                totalWeightedGrade10 += grade.getOverallGrade() * credits;
                totalWeightedGrade4 += grade.getGrade4() * credits;
            }
        }

        double gpa10 = totalCredits == 0 ? 0.0 : Math.round((totalWeightedGrade10 / totalCredits) * 100.0) / 100.0;
        double gpa4 = totalCredits == 0 ? 0.0 : Math.round((totalWeightedGrade4 / totalCredits) * 100.0) / 100.0;

        List<GradeResponse> details = grades.stream().map(gradeMapper::toResponse).toList();
        return new StudentAcademicSummaryResponse(
                student.getId(),
                student.getStudentCode(),
                student.getFirstName() + " " + student.getLastName(),
                student.getStudentClass() != null ? student.getStudentClass().getName() : "Chua xep lop",
                details,
                totalCredits,
                gpa10,
                gpa4
        );
    }

    @Override
    public List<GradeResponse> getAllGrades() {
        Authentication authentication = currentAuthentication();

        if (hasRole(authentication, "ROLE_ADMIN")) {
            return gradeRepository.findAllGradesWithJoinFetch().stream().map(gradeMapper::toResponse).toList();
        }

        if (hasRole(authentication, "ROLE_TEACHER")) {
            return gradeRepository.findByCourseClassTeacherUserEmail(authentication.getName()).stream()
                    .map(gradeMapper::toResponse)
                    .toList();
        }

        if (hasRole(authentication, "ROLE_STUDENT")) {
            User user = currentUser();
            return gradeRepository.findByStudentId(user.getId()).stream().map(gradeMapper::toResponse).toList();
        }

        throw new AppException(ErrorCode.UNAUTHENTICATED);
    }

    @Override
    public GradeResponse getGradeById(Long id) {
        Grade grade = gradeRepository.findByIdWithDetails(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));

        Authentication authentication = currentAuthentication();
        if (hasRole(authentication, "ROLE_STUDENT") && !grade.getStudent().getUser().getEmail().equalsIgnoreCase(authentication.getName())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }
        if (hasRole(authentication, "ROLE_TEACHER") && !isAssignedTeacher(grade.getCourseClass(), authentication.getName())) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }

        return gradeMapper.toResponse(grade);
    }

    @Override
    @Transactional
    public void deleteGrade(Long id) {
        Grade grade = gradeRepository.findByIdWithDetails(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        assertTeacherAssigned(grade.getCourseClass());
        gradeRepository.delete(grade);
    }

    private void assertTeacherAssigned(CourseClass courseClass) {
        Authentication authentication = currentAuthentication();
        if (hasRole(authentication, "ROLE_TEACHER") && !isAssignedTeacher(courseClass, authentication.getName())) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }
    }

    private boolean isAssignedTeacher(CourseClass courseClass, String email) {
        return courseClass != null
                && courseClass.getTeacher() != null
                && courseClass.getTeacher().getUser() != null
                && email.equalsIgnoreCase(courseClass.getTeacher().getUser().getEmail());
    }

    private Authentication currentAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    private User currentUser() {
        String email = currentAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));
    }

    private boolean hasRole(Authentication authentication, String role) {
        return authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(role));
    }

    private void calculateAndConvertGrade(Grade grade) {
        double attendance = grade.getAttendanceGrade() != null ? grade.getAttendanceGrade() : 0.0;
        double midterm = grade.getMidtermGrade() != null ? grade.getMidtermGrade() : 0.0;
        double finalG = grade.getFinalGrade() != null ? grade.getFinalGrade() : 0.0;
        double overall = Math.round(((attendance * 0.1) + (midterm * 0.3) + (finalG * 0.6)) * 100.0) / 100.0;
        grade.setOverallGrade(overall);

        if (overall >= 8.5) {
            grade.setLetterGrade("A");
            grade.setGrade4(4.0);
        } else if (overall >= 8.0) {
            grade.setLetterGrade("B+");
            grade.setGrade4(3.5);
        } else if (overall >= 7.0) {
            grade.setLetterGrade("B");
            grade.setGrade4(3.0);
        } else if (overall >= 6.5) {
            grade.setLetterGrade("C+");
            grade.setGrade4(2.5);
        } else if (overall >= 5.5) {
            grade.setLetterGrade("C");
            grade.setGrade4(2.0);
        } else if (overall >= 5.0) {
            grade.setLetterGrade("D+");
            grade.setGrade4(1.5);
        } else if (overall >= 4.0) {
            grade.setLetterGrade("D");
            grade.setGrade4(1.0);
        } else {
            grade.setLetterGrade("F");
            grade.setGrade4(0.0);
        }
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/SubjectServiceImpl.java">
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
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplication.java">
package com.dangdepzaivaio.StudentManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling; // 🔥 THÊM DÒNG NÀY

@SpringBootApplication
@EnableJpaAuditing
@EnableScheduling // 🔥 THÊM ANNOTATION NÀY ĐỂ KÍCH HOẠT TÍNH NĂNG HẸN GIỜ TỰ ĐỘNG CHỐT SỔ ĐÓNG CỔNG
public class StudentManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementApplication.class, args);
	}

}
</file>

<file path="student-management-ui/src/pages/GradePage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function GradePage() {
    const userRole = localStorage.getItem('roles') || '';
    const username = localStorage.getItem('username') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';

    const isTeacher = userRole.includes('TEACHER');
    const isAdmin = userRole.includes('ADMIN');
    const isStudent = userRole.includes('STUDENT');

    const [allGrades, setAllGrades] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [classList, setClassList] = useState([]);

    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    const [cohortOptions, setCohortOptions] = useState([]);
    const [deptOptions, setDeptOptions] = useState([]);
    const [classOptions, setClassOptions] = useState([]);

    const [displayGrades, setDisplayGrades] = useState([]);
    const [editGradesMap, setEditGradesMap] = useState({});
    const [isBulkEdit, setIsBulkEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    useEffect(() => {
        if (isAdmin || isTeacher || isStudent) {
            loadSystemInitialData();
        }
    }, [isAdmin, isTeacher, isStudent]);

    useEffect(() => {
        if (allStudents.length === 0) return;

        const availCohorts = allStudents.filter(s =>
            (!selectedDept || s.departmentName === departments.find(d => d.id === Number(selectedDept))?.name) &&
            (!selectedClass || s.classId === Number(selectedClass))
        ).map(s => s.cohort).filter(Boolean);
        setCohortOptions([...new Set(availCohorts)].sort());

        const availDeptNames = allStudents.filter(s =>
            (!selectedCohort || s.cohort === selectedCohort) &&
            (!selectedClass || s.classId === Number(selectedClass))
        ).map(s => s.departmentName).filter(Boolean);
        setDeptOptions(departments.filter(d => availDeptNames.includes(d.name)));

        const availClassIds = allStudents.filter(s =>
            (!selectedCohort || s.cohort === selectedCohort) &&
            (!selectedDept || s.departmentName === departments.find(d => d.id === Number(selectedDept))?.name)
        ).map(s => s.classId).filter(Boolean);
        setClassOptions(classList.filter(c => availClassIds.includes(c.id)));

        recalculateFiltersAndData();
    }, [selectedCohort, selectedDept, selectedClass, allGrades, allStudents, departments, classList]);

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    const loadSystemInitialData = async () => {
        try {
            setLoading(true);
            const [deptsData, classesData, studentsData, gradesData] = await Promise.all([
                axiosClient.get('/departments').catch(() => []),
                axiosClient.get('/classes').catch(() => []),
                axiosClient.get('/students?includeInactive=false').catch(() => []),
                axiosClient.get('/grades').catch(() => [])
            ]);

            setDepartments(deptsData || []);
            setClassList(classesData || []);
            setAllStudents(studentsData || []);

            if (isStudent && loggedInStudentId) {
                setAllGrades((gradesData || []).filter(g => String(g.studentId) === String(loggedInStudentId)));
            } else {
                setAllGrades(gradesData || []);
            }
        } catch (err) {
            showMessage('Lỗi tải dữ liệu hệ thống!', true);
        } finally {
            setLoading(false);
        }
    };

    const recalculateFiltersAndData = () => {
        let filtered = allGrades.map(grade => {
            const studentObj = allStudents.find(s => s.id === grade.studentId);
            return {
                ...grade,
                studentCode: studentObj?.studentCode || 'N/A',
                studentName: studentObj ? `${studentObj.lastName} ${studentObj.firstName}` : 'Ẩn danh',
                cohort: studentObj?.cohort || 'Khóa 1',
                classId: studentObj?.classId || null,
                departmentName: studentObj?.departmentName || ''
            };
        });

        if (selectedCohort) filtered = filtered.filter(g => g.cohort === selectedCohort);
        if (selectedDept) {
            const deptObj = departments.find(d => d.id === Number(selectedDept));
            if (deptObj) filtered = filtered.filter(g => g.departmentName === deptObj.name);
        }
        if (selectedClass) filtered = filtered.filter(g => g.classId === Number(selectedClass));

        setDisplayGrades(filtered);

        const newEditMap = {};
        filtered.forEach(g => {
            newEditMap[g.id] = {
                cc: g.attendanceGrade !== undefined && g.attendanceGrade !== null ? String(g.attendanceGrade) : '',
                gk: g.midtermGrade !== undefined && g.midtermGrade !== null ? String(g.midtermGrade) : '',
                ck: g.finalGrade !== undefined && g.finalGrade !== null ? String(g.finalGrade) : '',
                studentId: g.studentId,
                courseClassId: g.courseClassId
            };
        });
        setEditGradesMap(newEditMap);
    };

    const handleGradeInputChange = (gradeId, field, value) => {
        if (value !== '') {
            if (!/^\d*\.?\d*$/.test(value)) return;
            const num = parseFloat(value);
            if (!isNaN(num) && (num < 0 || num > 10)) return;
        }
        setEditGradesMap(prev => ({
            ...prev,
            [gradeId]: { ...prev[gradeId], [field]: value }
        }));
    };

    const handleBulkSave = async () => {
        try {
            setLoading(true);
            const savePromises = displayGrades.map(g => {
                const editData = editGradesMap[g.id];
                return axiosClient.put(`/grades/${g.id}`, {
                    studentId: editData.studentId,
                    courseClassId: editData.courseClassId,
                    attendanceGrade: editData.cc === '' ? 0 : Number(editData.cc),
                    midtermGrade: editData.gk === '' ? 0 : Number(editData.gk),
                    finalGrade: editData.ck === '' ? 0 : Number(editData.ck)
                });
            });

            await Promise.all(savePromises);
            showMessage('Đã cập nhật điểm thành công!');
            setIsBulkEdit(false);

            const gradesData = await axiosClient.get('/grades').catch(() => []);
            setAllGrades(gradesData);
        } catch (err) {
            showMessage(err || 'Có lỗi xảy ra khi lưu bảng điểm!', true);
        } finally {
            setLoading(false);
        }
    };

    const handleDeptChange = (deptId) => {
        setSelectedDept(deptId);
        setSelectedClass('');
    };

    const handleClassChange = (classId) => {
        setSelectedClass(classId);
        if (classId) {
            const clsObj = classList.find(c => c.id === Number(classId));
            if (clsObj) {
                const matchedDept = departments.find(d => d.name === clsObj.departmentName);
                if (matchedDept) setSelectedDept(String(matchedDept.id));
            }
        }
    };

    // ==================== 🔥 LÕI TÍNH ĐIỂM CHUẨN TÍN CHỈ ====================

    // 1. Tính TỪNG MÔN HỌC (Trả về Điểm Chữ: A+, A, B+, B...)
    const getSubjectGradeDetails = (cc, gk, ck) => {
        const overall10 = (cc * 0.1 + gk * 0.3 + ck * 0.6);
        let g4 = 0.0;
        let letter = 'F';

        if (overall10 >= 9.0) { g4 = 4.0; letter = 'A+'; }
        else if (overall10 >= 8.5) { g4 = 3.8; letter = 'A'; }
        else if (overall10 >= 8.0) { g4 = 3.5; letter = 'B+'; }
        else if (overall10 >= 7.0) { g4 = 3.0; letter = 'B'; }
        else if (overall10 >= 6.5) { g4 = 2.5; letter = 'C+'; }
        else if (overall10 >= 5.5) { g4 = 2.0; letter = 'C'; }
        else if (overall10 >= 5.0) { g4 = 1.5; letter = 'D+'; }
        else if (overall10 >= 4.0) { g4 = 1.0; letter = 'D'; }

        return { overall10: Number(overall10.toFixed(2)), g4, letter };
    };

    // 2. Tính TỔNG KẾT TÍCH LŨY (Trả về Xếp Loại Học Lực chuẩn: Xuất sắc, Giỏi, Khá...)
    const calculateWeightedGPA = (gradesArray) => {
        let totalCredits = 0;
        let sum10 = 0;
        let sum4 = 0;

        gradesArray.forEach(g => {
            const credits = g.credits || 3;
            const ccVal = g.attendanceGrade !== undefined && g.attendanceGrade !== null ? Number(g.attendanceGrade) : 0;
            const gkVal = g.midtermGrade !== undefined && g.midtermGrade !== null ? Number(g.midtermGrade) : 0;
            const ckVal = g.finalGrade !== undefined && g.finalGrade !== null ? Number(g.finalGrade) : 0;

            const { overall10, g4 } = getSubjectGradeDetails(ccVal, gkVal, ckVal);

            totalCredits += credits;
            sum10 += overall10 * credits;
            sum4 += g4 * credits;
        });

        if (totalCredits === 0) return { gpa10: '-', gpa4: '-', rank: 'Chưa có' };

        const gpa10 = (sum10 / totalCredits).toFixed(2);
        const gpa4Num = sum4 / totalCredits;
        const gpa4 = gpa4Num.toFixed(2);

        // 🔥 ĐÃ FIX: Chỉ sử dụng Xếp loại học lực cho Tổng kết (Không dùng điểm chữ)
        let rank = 'Kém';
        if (gpa4Num >= 3.6) rank = 'Xuất sắc';
        else if (gpa4Num >= 3.2) rank = 'Giỏi';
        else if (gpa4Num >= 2.5) rank = 'Khá';
        else if (gpa4Num >= 2.0) rank = 'Trung bình';
        else if (gpa4Num >= 1.0) rank = 'Yếu';

        return { gpa10, gpa4, rank };
    };

    const groupGradesBySemester = (gradesArray) => {
        const grouped = {};
        gradesArray.forEach(g => {
            const sem = g.semester || 'Học kỳ tiêu chuẩn';
            if (!grouped[sem]) grouped[sem] = [];
            grouped[sem].push(g);
        });
        return grouped;
    };

    const getAdminAggregatedRows = () => {
        let filteredStudents = [...allStudents];
        if (selectedCohort) filteredStudents = filteredStudents.filter(s => s.cohort === selectedCohort);
        if (selectedDept) {
            const deptObj = departments.find(d => d.id === Number(selectedDept));
            if (deptObj) filteredStudents = filteredStudents.filter(s => s.departmentName === deptObj.name);
        }
        if (selectedClass) filteredStudents = filteredStudents.filter(s => s.classId === Number(selectedClass));

        return filteredStudents.map((student, index) => {
            const studentGrades = allGrades.filter(g => g.studentId === student.id);
            const cumulative = calculateWeightedGPA(studentGrades);

            const grouped = groupGradesBySemester(studentGrades);
            const semesters = Object.keys(grouped).sort();
            const latestSem = semesters.length > 0 ? semesters[semesters.length - 1] : null;
            const latestSemGrades = latestSem ? grouped[latestSem] : [];
            const semesterGpa = calculateWeightedGPA(latestSemGrades);

            return {
                ...student,
                stt: index + 1,
                studentName: `${student.lastName} ${student.firstName}`,
                semGpa10: semesterGpa.gpa10,
                semGpa4: semesterGpa.gpa4,
                semRank: semesterGpa.rank,
                cumGpa10: cumulative.gpa10,
                cumGpa4: cumulative.gpa4,
                cumRank: cumulative.rank
            };
        });
    };

    const adminRows = getAdminAggregatedRows();

    // ==================== 🎓 GIAO DIỆN 1: SINH VIÊN (STUDENT VIEW) ====================
    if (isStudent) {
        const studentGrades = allGrades;
        const cumulative = calculateWeightedGPA(studentGrades);
        const groupedGrades = groupGradesBySemester(studentGrades);

        return (
            <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>📋 XEM ĐIỂM HỌC TẬP CÁ NHÂN</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>Mã học viên: {username}. Xem toàn bộ chi tiết điểm học phần và GPA phân rã theo từng học kỳ.</p>
                </div>

                {loading ? (
                    <p style={{textAlign:'center', color:'var(--text-muted)'}}>Đang tải bảng điểm học viên...</p>
                ) : (
                    <div>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-primary)', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                                <span style={{ fontSize: '13px', opacity: 0.9 }}>Tín Chỉ Tích Lũy</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{studentGrades.reduce((sum, g) => sum + (g.credits || 3), 0)} tín</h2>
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-success)', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                                <span style={{ fontSize: '13px', opacity: 0.9 }}>GPA Tổng Hệ 10</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{cumulative.gpa10}</h2>
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-warning)', padding: '15px', borderRadius: '6px', textAlign: 'center', color: '#000' }}>
                                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>GPA Tổng Hệ 4</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{cumulative.gpa4}</h2>
                            </div>
                            {/* 🔥 ĐÃ FIX: Chỉ hiển thị Xếp loại Học Lực toàn khóa */}
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-danger)', padding: '15px', borderRadius: '6px', textAlign: 'center', color: '#fff' }}>
                                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Xếp Loại Tích Lũy</span>
                                <h2 style={{ margin: '5px 0 0 0', fontSize: '18px' }}>{cumulative.rank}</h2>
                            </div>
                        </div>

                        {Object.keys(groupedGrades).sort().map(sem => {
                            const semGrades = groupedGrades[sem];
                            const semGpa = calculateWeightedGPA(semGrades);

                            return (
                                <div key={sem} style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', marginBottom: '25px' }}>
                                    <h3 style={{ color: 'var(--color-warning)', marginTop: 0, marginBottom: '15px', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                                        📅 {sem}
                                    </h3>
                                    <div style={{ overflowX: 'auto' }}>
                                        <table style={tableStyle}>
                                            <thead>
                                            <tr style={thStyle}>
                                                <th>Môn Học Phần</th>
                                                <th>Mã Lớp HP</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>Tín chỉ</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>CC</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>GK</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>CK</th>
                                                <th style={thCenterStyle}>Hệ 10</th>
                                                <th style={thCenterStyle}>Hệ 4</th>
                                                <th style={thCenterStyle}>Điểm Chữ</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {semGrades.map((g, i) => {
                                                const ccVal = g.attendanceGrade !== undefined && g.attendanceGrade !== null ? Number(g.attendanceGrade) : 0;
                                                const gkVal = g.midtermGrade !== undefined && g.midtermGrade !== null ? Number(g.midtermGrade) : 0;
                                                const ckVal = g.finalGrade !== undefined && g.finalGrade !== null ? Number(g.finalGrade) : 0;

                                                // 🔥 TỪNG MÔN: Giữ nguyên quy đổi Điểm Chữ A+, B+, C...
                                                const details = getSubjectGradeDetails(ccVal, gkVal, ckVal);

                                                return (
                                                    <tr key={i} style={trStyle}>
                                                        <td style={{ fontWeight: 'bold' }}>{g.subjectName}</td>
                                                        <td style={{ color: 'var(--text-cyan)', fontWeight: 'bold' }}>{g.courseClassCode}</td>
                                                        <td style={{ textAlign: 'center', color: 'var(--color-warning)' }}>{g.credits || 3}</td>
                                                        <td style={{ textAlign: 'center' }}>{g.attendanceGrade !== null ? g.attendanceGrade : '-'}</td>
                                                        <td style={{ textAlign: 'center' }}>{g.midtermGrade !== null ? g.midtermGrade : '-'}</td>
                                                        <td style={{ textAlign: 'center' }}>{g.finalGrade !== null ? g.finalGrade : '-'}</td>
                                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)' }}>{details.overall10}</td>
                                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-warning)' }}>{details.g4}</td>
                                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: details.letter.includes('F') ? 'var(--color-danger)' : 'var(--color-success)' }}>{details.letter}</td>
                                                    </tr>
                                                );
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', justifyContent: 'flex-end', gap: '25px', fontSize: '14px' }}>
                                        <span><b>Tín chỉ đạt:</b> <span style={{ color: 'var(--color-warning)' }}>{semGrades.reduce((sum, g) => sum + (g.credits || 3), 0)}</span></span>
                                        <span><b>TB Kỳ (Hệ 10):</b> <span style={{ color: 'var(--text-cyan)' }}>{semGpa.gpa10}</span></span>
                                        <span><b>TB Kỳ (Hệ 4):</b> <span style={{ color: 'var(--color-warning)' }}>{semGpa.gpa4}</span></span>
                                        {/* 🔥 ĐÃ FIX: Footer học kỳ tính theo Xếp loại Học Lực */}
                                        <span><b>Xếp loại học lực:</b> <span style={{ color: semGpa.rank === 'Yếu' || semGpa.rank === 'Kém' ? 'var(--color-danger)' : 'var(--color-success)' }}>{semGpa.rank}</span></span>
                                    </div>
                                </div>
                            );
                        })}
                        {studentGrades.length === 0 && (
                            <p style={{ color: 'var(--text-muted)' }}>Chưa có dữ liệu kết quả học tập nào.</p>
                        )}
                    </div>
                )}
            </div>
        );
    }

    // ==================== 👨‍🏫 GIÁO VIÊN & QUẢN TRỊ VIÊN (ADMIN & TEACHER) ====================
    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                    <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>
                        {isTeacher ? '👨‍🏫 BẢNG NHẬP ĐIỂM THÀNH PHẦN' : '🏛️ BẢNG ĐIỂM TỔNG HỢP TOÀN TRƯỜNG'}
                    </h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                        {isTeacher ? 'Quyền hạn Giảng viên: Sửa để gõ điểm và chọn Lưu để cập nhật.' : 'Quyền hạn Quản trị viên: Theo dõi điểm số tổng kết tích lũy của từng học viên.'}
                    </p>
                </div>

                {displayGrades.length > 0 && isTeacher && (
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {!isBulkEdit ? (
                            <button onClick={() => setIsBulkEdit(true)} style={primaryBtnStyle}>Sửa</button>
                        ) : (
                            <>
                                <button onClick={() => { setIsBulkEdit(false); recalculateFiltersAndData(); }} style={{ ...primaryBtnStyle, backgroundColor: '#6c757d' }}>Hủy</button>
                                <button onClick={handleBulkSave} style={{ ...primaryBtnStyle, backgroundColor: 'var(--color-success)' }}>Lưu</button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {message.text && (
                <div style={{ padding: '12px', marginBottom: '20px', backgroundColor: message.isError ? 'var(--color-danger)' : 'var(--color-primary)', color: 'white', borderRadius: '4px', fontWeight: 'bold' }}>
                    {message.text}
                </div>
            )}

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '140px' }}>
                    <label style={labelStyle}>⏳ Lọc Khóa học:</label>
                    <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả Khóa --</option>
                        {cohortOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div style={{ flex: '1', minWidth: '180px' }}>
                    <label style={labelStyle}>🏛️ Lọc Khoa chuyên môn:</label>
                    <select value={selectedDept} onChange={(e) => handleDeptChange(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả Khoa --</option>
                        {deptOptions.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                </div>

                <div style={{ flex: '1.2', minWidth: '180px' }}>
                    <label style={labelStyle}>👥 Lọc Lớp hành chính:</label>
                    <select value={selectedClass} onChange={(e) => handleClassChange(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả Lớp --</option>
                        {classOptions.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                    </select>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                {loading ? (
                    <p style={{textAlign:'center', color:'var(--text-muted)'}}>Đang đồng bộ cơ sở dữ liệu điểm số...</p>
                ) : isAdmin ? (
                    /* 🏛️ BẢNG ĐIỂM ĐỘC QUYỀN ADMIN - ĐÃ ĐỔI NHÃN THÀNH XẾP LOẠI */
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}>
                                <th style={{ width: '50px' }}>STT</th>
                                <th>Mã Sinh Viên</th>
                                <th>Họ Và Tên Học Viên</th>
                                <th>Lớp Hành Chính</th>
                                <th style={thCenterStyle}>TB Kỳ Gần Nhất<br/><span style={{fontSize:'10.5px', color:'var(--text-muted)'}}>(Hệ 10 / Hệ 4 / Xếp loại)</span></th>
                                <th style={thCenterStyle}>TB Tích Lũy Khóa<br/><span style={{fontSize:'10.5px', color:'var(--text-muted)'}}>(Hệ 10 / Hệ 4 / Xếp loại)</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminRows.map((row) => (
                                <tr key={row.id} style={trStyle}>
                                    <td>{row.stt}</td>
                                    <td style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{row.studentCode}</td>
                                    <td>{row.studentName}</td>
                                    <td>{row.className || 'Chưa xếp'}</td>

                                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        <span style={{ color: 'var(--text-cyan)' }}>{row.semGpa10}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: 'var(--color-warning)' }}>{row.semGpa4}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: row.semRank === 'Yếu' || row.semRank === 'Kém' || row.semRank === 'Chưa có' ? 'var(--color-danger)' : 'var(--color-success)' }}>{row.semRank}</span>
                                    </td>

                                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        <span style={{ color: 'var(--text-cyan)' }}>{row.cumGpa10}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: 'var(--color-warning)' }}>{row.cumGpa4}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: row.cumRank === 'Yếu' || row.cumRank === 'Kém' || row.cumRank === 'Chưa có' ? 'var(--color-danger)' : 'var(--color-success)' }}>{row.cumRank}</span>
                                    </td>
                                </tr>
                            ))}
                            {adminRows.length === 0 && (
                                <tr><td colSpan="6" style={{textAlign:'center', padding:'15px', color:'var(--text-muted)'}}>Không tìm thấy hồ sơ sinh viên phù hợp.</td></tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    /* 👨‍🏫 BẢNG ĐIỂM DÀNH CHO GIẢNG VIÊN (TEACHER) - HIỂN THỊ ĐỦ CÁC HỆ ĐIỂM ĐỂ SỬA */
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}>
                                <th style={{ width: '40px' }}>STT</th>
                                <th style={{ width: '130px' }}>Sinh Viên / Mã Số</th>
                                <th>Môn Học Phần</th>
                                <th style={{ width: '60px', textAlign: 'center' }}>Tín chỉ</th>
                                <th style={{ ...thCenterStyle, width: '70px' }}>CC (10%)</th>
                                <th style={{ ...thCenterStyle, width: '70px' }}>GK (30%)</th>
                                <th style={{ ...thCenterStyle, width: '70px' }}>CK (60%)</th>
                                <th style={thCenterStyle}>Hệ 10</th>
                                <th style={thCenterStyle}>Hệ 4</th>
                                <th style={thCenterStyle}>Điểm Chữ</th>
                            </tr>
                            </thead>
                            <tbody>
                            {displayGrades.map((g, index) => {
                                const editRow = editGradesMap[g.id] || { cc: '', gk: '', ck: '' };
                                const ccVal = editRow.cc === '' ? 0 : parseFloat(editRow.cc);
                                const gkVal = editRow.gk === '' ? 0 : parseFloat(editRow.gk);
                                const ckVal = editRow.ck === '' ? 0 : parseFloat(editRow.ck);

                                // Preview điểm số Realtime cho Teacher khi nhập liệu (Điểm Chữ từng môn)
                                const details = getSubjectGradeDetails(ccVal, gkVal, ckVal);

                                return (
                                    <tr key={g.id} style={trStyle}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <b>{g.studentName}</b><br/>
                                            <span style={{fontSize:'12px', color:'var(--color-warning)', fontWeight:'bold'}}>{g.studentCode}</span>
                                        </td>
                                        <td style={{fontWeight:'500'}}>{g.subjectName}</td>
                                        <td style={{color:'var(--text-cyan)', fontWeight:'bold', textAlign: 'center'}}>{g.credits || 3}</td>

                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.cc} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'cc', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.gk} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'gk', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.ck} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'ck', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>

                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)', fontSize: '14.5px' }}>{details.overall10}</td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-warning)', fontSize: '14.5px' }}>{details.g4}</td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: details.letter.includes('F') ? 'var(--color-danger)' : 'var(--color-success)' }}>{details.letter}</td>
                                    </tr>
                                );
                            })}
                            {displayGrades.length === 0 && (
                                <tr><td colSpan="10" style={{textAlign:'center', padding:'15px', color:'var(--text-muted)'}}>Không tìm thấy bảng điểm môn học phù hợp.</td></tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

const labelStyle = { display: 'block', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold', color: 'var(--text-cyan)', textAlign: 'left' };
const selectStyle = { width: '100%', padding: '10px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none', cursor: 'pointer' };
const gradeInputStyle = { width: '55px', padding: '6px', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', textAlign: 'center', outline: 'none', transition: 'all 0.2s' };
const primaryBtnStyle = { padding: '8px 24px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '12px' };
const thCenterStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'center', padding: '12px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '12px' };
</file>

<file path="student-management-ui/src/pages/RegistrationPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function RegistrationPage() {
    const role = localStorage.getItem('roles') || '';
    const teacherId = localStorage.getItem('teacherId') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';

    const [message, setMessage] = useState({ text: '', isError: false });

    // --- STATE PHÂN HỆ ADMIN ---
    const [periodForm, setPeriodForm] = useState({ semester: 'HK1-2026', startTime: '', endTime: '' });
    const [allPeriods, setAllPeriods] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [courseClasses, setCourseClasses] = useState([]);

    // --- STATE PHÂN HỆ TEACHER ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [classStudents, setClassStudents] = useState([]);

    // --- STATE PHÂN HỆ STUDENT ---
    const [availableClasses, setAvailableClasses] = useState([]);
    const [myRegisteredClasses, setMyRegisteredClasses] = useState([]);
    const [isRegistrationTime, setIsRegistrationTime] = useState(false);
    const [activePeriodInfo, setActivePeriodInfo] = useState(null);

    const [selectedClassIds, setSelectedClassIds] = useState([]);

    const [tick, setTick] = useState(Date.now());

    useEffect(() => {
        refreshData();
    }, [role]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTick(Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (activePeriodInfo) {
            const now = new Date();
            const start = new Date(activePeriodInfo.startTime);
            const end = new Date(activePeriodInfo.endTime);

            if (activePeriodInfo.isActive && now >= start && now <= end) {
                if (!isRegistrationTime) {
                    setIsRegistrationTime(true);
                    if (role.includes('STUDENT')) fetchOpenClassesForStudent(activePeriodInfo.semester);
                }
            } else {
                if (isRegistrationTime) {
                    setIsRegistrationTime(false);
                    if (role.includes('STUDENT')) setAvailableClasses([]);
                }
            }
        }
    }, [tick, activePeriodInfo, role]);

    const refreshData = () => {
        if (role.includes('ADMIN')) loadAdminPeriodsAndClasses();
        if (role.includes('TEACHER')) {
            fetchActivePeriodStatus();
            loadTeacherSchedule();
        }
        if (role.includes('STUDENT')) loadStudentRegistrationFlow();
    };

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    const fetchActivePeriodStatus = async () => {
        try {
            const periods = await axiosClient.get('/registration/periods');
            if (periods && periods.length > 0) {
                const sorted = [...periods].sort((a, b) => b.id - a.id);
                setActivePeriodInfo(sorted[0]);
            }
        } catch (err) { console.error(err); }
    };

    // ==================== 🛠️ NGHIỆP VỤ ADMIN (GIỮ NGUYÊN 100%) ====================
    const loadAdminPeriodsAndClasses = async () => {
        try {
            const periodsData = await axiosClient.get('/registration/periods');
            if (periodsData && periodsData.length > 0) {
                const sortedPeriods = [...periodsData].sort((a, b) => b.id - a.id);
                setAllPeriods(sortedPeriods);

                if (selectedPeriod) {
                    const updated = sortedPeriods.find(p => p.id === selectedPeriod.id);
                    setSelectedPeriod(updated || sortedPeriods[0]);
                } else {
                    setSelectedPeriod(sortedPeriods[0]);
                }
            }
            const classesData = await axiosClient.get('/course-classes');
            setCourseClasses(classesData);
        } catch (err) { showMessage('Không thể tải dữ liệu quản trị hệ thống', true); }
    };

    const handleCreatePeriod = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post('/registration/periods', periodForm);
            showMessage('Kích hoạt cấu hình khung giờ và lưu đợt mở đăng ký học kỳ mới thành công!');
            setPeriodForm({ semester: 'HK1-2026', startTime: '', endTime: '' });
            refreshData();
        } catch (err) { showMessage(err || 'Lỗi kích hoạt khung giờ', true); }
    };

    const handleClosePeriod = async (id) => {
        if (!window.confirm("⚠️ Bạn có chắc chắn muốn HỦY KÍCH HOẠT khung giờ đăng ký tín chỉ này không?")) return;
        try {
            await axiosClient.put(`/registration/periods/${id}/close`);
            showMessage('Đã đóng cổng và hủy kích hoạt khung giờ thành công!');
            refreshData();
        } catch (err) { showMessage(err || 'Không thể thực hiện hủy kích hoạt!', true); }
    };

    const handleToggleClassRegistration = async (id) => {
        try {
            await axiosClient.put(`/registration/course-class/${id}/toggle`);
            showMessage(`Cập nhật trạng thái tích chọn mở lớp học phần thành công!`);
            const classesData = await axiosClient.get('/course-classes');
            setCourseClasses(classesData);
        } catch (err) { showMessage(err || 'Không thể thay đổi trạng thái tích chọn môn', true); }
    };

    // 🔥 THUẬT TOÁN KIỂM TRA TRÙNG LỊCH CHUẨN KHUNG 3 CA
    const checkScheduleConflicts = (selectedItems, existingItems) => {
        const slotsMap = {};
        const allItemsToCheck = [...existingItems, ...selectedItems];

        for (const item of allItemsToCheck) {
            const schedStr = (item.schedule || '').toLowerCase();
            if (!schedStr) continue;

            // 1. Xác định Thứ (Từ Thứ 2 đến Chủ Nhật)
            let dayKey = '';
            if (schedStr.includes('chủ nhật') || schedStr.includes('cn')) dayKey = 'CN';
            else {
                const dayMatch = schedStr.match(/thứ\s*(\d+)/) || schedStr.match(/t(\d+)/);
                if (dayMatch) dayKey = dayMatch[1];
            }

            if (!dayKey) continue;
            if (!slotsMap[dayKey]) slotsMap[dayKey] = {};

            // 2. Xác định Ca học (Sáng / Chiều / Tối)
            let shiftKey = '';
            if (schedStr.includes('sáng') || schedStr.match(/tiết\s*[1-4]/)) shiftKey = 'Sáng';
            else if (schedStr.includes('chiều') || schedStr.match(/tiết\s*[5-8]/)) shiftKey = 'Chiều';
            else if (schedStr.includes('tối') || schedStr.match(/tiết\s*(9|10|11|12)/)) shiftKey = 'Tối';

            if (!shiftKey) continue; // Bỏ qua nếu không xác định được ca

            // 3. Đối chiếu trùng lặp theo Ca
            if (slotsMap[dayKey][shiftKey]) {
                const dayLabel = dayKey === 'CN' ? 'Chủ Nhật' : `Thứ ${dayKey}`;
                return `🚨 Xung đột lịch học: Bạn không thể đăng ký môn [${item.subjectName}] vì đã bị trùng vào Buổi ${shiftKey} ${dayLabel} với môn [${slotsMap[dayKey][shiftKey]}]!`;
            }

            // Ghi nhận slot đã chiếm
            slotsMap[dayKey][shiftKey] = item.subjectName;
        }
        return null;
    };
    // ==================== 💼 NGHIỆP VỤ TEACHER ====================
    const loadTeacherSchedule = async () => {
        if (!teacherId) return;
        try {
            const data = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
            setTeacherClasses(data);
        } catch (err) { showMessage('Không thể tải lịch giảng dạy cá nhân', true); }
    };

    const viewClassStudents = async (classId) => {
        setSelectedClassId(classId);
        try {
            const data = await axiosClient.get(`/registration/classes/${classId}/students`);
            setClassStudents(data);
        } catch (err) { showMessage('Không thể tải danh sách sinh viên lớp học phần', true); }
    };

    const handleToggleApproveStudent = (studentId) => {
        const key = `approved_st_${selectedClassId}_${studentId}`;
        const isApproved = localStorage.getItem(key) === 'true';
        localStorage.setItem(key, String(!isApproved));
        setClassStudents([...classStudents]);
    };

    // ==================== 🎓 NGHIỆP VỤ STUDENT ====================
    const fetchOpenClassesForStudent = async (semester) => {
        try {
            const allSystemClasses = await axiosClient.get('/course-classes');
            const filteredOpenClasses = allSystemClasses.filter(
                c => c.openForRegistration === true && c.semester === semester
            );
            setAvailableClasses(filteredOpenClasses);
        } catch (err) { console.error(err); }
    };

    const loadStudentRegistrationFlow = async () => {
        try {
            const periods = await axiosClient.get('/registration/periods');
            let period = null;
            if (periods && periods.length > 0) {
                const sorted = [...periods].sort((a, b) => b.id - a.id);
                period = sorted[0];
                setActivePeriodInfo(period);
            }

            if (period && period.isActive) {
                const now = new Date();
                const start = new Date(period.startTime);
                const end = new Date(period.endTime);

                if (now >= start && now <= end) {
                    setIsRegistrationTime(true);
                    await fetchOpenClassesForStudent(period.semester);
                } else {
                    setIsRegistrationTime(false);
                    setAvailableClasses([]);
                }
            } else {
                setIsRegistrationTime(false);
                setAvailableClasses([]);
            }

            const myClasses = await axiosClient.get('/registration/my-classes');
            setMyRegisteredClasses(myClasses);
        } catch (err) { console.error(err); }
    };

    const handleBulkEnroll = async () => {
        if (selectedClassIds.length === 0) return alert('Vui lòng chọn ít nhất 1 môn để đăng ký!');

        const itemsToEnroll = availableClasses.filter(c => selectedClassIds.includes(c.id));

        // CHỈ LẤY NHỮNG MÔN ĐÃ ĐƯỢC DUYỆT (Hoặc môn cũ) ĐỂ CHECK TRÙNG, BỎ QUA MÔN PENDING
        const validExistingClasses = myRegisteredClasses.filter(reg => {
            const isCurrentSem = activePeriodInfo && reg.semester === activePeriodInfo.semester;
            const isApproved = localStorage.getItem(`approved_st_${reg.courseClassId}_${loggedInStudentId}`) === 'true';
            return !isCurrentSem || isApproved;
        });

        const conflictError = checkScheduleConflicts(itemsToEnroll, validExistingClasses);
        if (conflictError) {
            alert(conflictError);
            return;
        }

        try {
            const promises = selectedClassIds.map(id => axiosClient.post(`/registration/enroll?courseClassId=${id}`));
            await Promise.all(promises);
            showMessage('Đăng ký tín chỉ thành công! Đơn đang chờ Giảng viên phê duyệt.');
            setSelectedClassIds([]);
            loadStudentRegistrationFlow();
        } catch (err) { showMessage(err || 'Không thể đăng ký học phần này!', true); }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} ngày ${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
    };

    const renderPeriodStatusLabel = (period) => {
        if (!period) return <span style={{color:'var(--text-muted)'}}>Chưa rõ</span>;
        if (!period.isActive) return <span style={{color:'var(--color-danger)', fontWeight:'bold'}}>🔒 Đã đóng / Hủy kích hoạt</span>;

        const now = new Date();
        const start = new Date(period.startTime);
        const end = new Date(period.endTime);

        if (now < start) return <span style={{color:'var(--color-warning)', fontWeight:'bold'}}>⏳ Chờ đến mốc giờ mở</span>;
        else if (now > end) return <span style={{color:'var(--color-danger)', fontWeight:'bold'}}>⏰ Đã hết hạn đóng cổng</span>;
        else return <span style={{color:'var(--color-success)', fontWeight:'bold'}}>🟢 Đang mở đăng ký</span>;
    };

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <h2 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-xl)' }}>⏰ TRUNG TÂM ĐIỀU PHỐI ĐĂNG KÝ TÍN CHỈ REALTIME</h2>

            {message.text && (
                <div style={{ padding: '12px', marginBottom: '20px', backgroundColor: message.isError ? 'var(--color-danger)' : 'var(--color-primary)', color: 'white', borderRadius: '4px', fontWeight: 'bold' }}>
                    {message.text}
                </div>
            )}

            {/* ==================== VIEW ADMIN (GIỮ NGUYÊN BẢN GỐC) ==================== */}
            {role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--text-cyan)', margin: '0 0 12px 0' }}>📂 LỊCH SỬ CÁC ĐỢT MỞ CỔNG ĐĂNG KÝ HỆ THỐNG</h3>
                        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                            {allPeriods.map(p => {
                                const isSelected = selectedPeriod?.id === p.id;
                                let statusText = '🔒 Đã hủy/Đóng cổng';
                                let statusColor = 'var(--color-danger)';

                                if (p.isActive) {
                                    const now = new Date();
                                    const start = new Date(p.startTime);
                                    const end = new Date(p.endTime);
                                    if (now < start) {
                                        statusText = '⏳ Chờ mốc giờ';
                                        statusColor = 'var(--color-warning)';
                                    } else if (now > end) {
                                        statusText = '⏰ Đã hết hạn';
                                        statusColor = 'var(--color-danger)';
                                    } else {
                                        statusText = '● Đang hoạt động';
                                        statusColor = 'var(--color-success)';
                                    }
                                }

                                return (
                                    <div
                                        key={p.id}
                                        onClick={() => setSelectedPeriod(p)}
                                        style={{
                                            padding: '10px 15px',
                                            backgroundColor: isSelected ? 'rgba(0, 188, 212, 0.08)' : 'var(--color-bg)',
                                            border: isSelected ? '2px solid var(--text-cyan)' : '1px solid var(--color-border)',
                                            boxShadow: isSelected ? '0 0 10px rgba(0, 188, 212, 0.25)' : 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            minWidth: '220px',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <div style={{ fontWeight: 'bold', fontSize: '14px', color: isSelected ? 'var(--text-cyan)' : 'white' }}>Học kỳ: {p.semester}</div>
                                        <div style={{ fontSize: '12px', color: isSelected ? 'white' : 'var(--text-muted)', marginTop: '4px' }}>Mã đợt: #RP_{p.id}</div>
                                        <div style={{ fontSize: '11px', marginTop: '6px', color: statusColor, fontWeight: 'bold' }}>{statusText}</div>
                                    </div>
                                );
                            })}
                            {allPeriods.length === 0 && <p style={{color:'var(--text-muted)', fontSize:'13px'}}>Chưa có dữ liệu lịch sử đợt mở đăng ký.</p>}
                        </div>
                    </div>

                    {selectedPeriod && (
                        <div style={{ padding: '15px 20px', backgroundColor: 'var(--color-surface)', borderLeft: '5px solid var(--color-success)', borderRadius: '4px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--color-border)' }}>
                            <div>
                                <h4 style={{ margin: '0 0 6px 0', color: 'var(--text-cyan)' }}>🟢 CHI TIẾT ĐỢT ĐANG CHỌN GIÁM SÁT REALTIME</h4>
                                <div style={{ fontSize: '13px' }}>
                                    Học kỳ áp dụng: <b style={{color:'var(--color-warning)'}}>{selectedPeriod.semester}</b> |
                                    Thời gian cấu hình: Từ <b>{formatDate(selectedPeriod.startTime)}</b> đến <b>{formatDate(selectedPeriod.endTime)}</b> |
                                    Trạng thái thực tế: {renderPeriodStatusLabel(selectedPeriod)}
                                </div>
                            </div>
                            {selectedPeriod && selectedPeriod.isActive && (
                                <button
                                    onClick={() => handleClosePeriod(selectedPeriod.id)}
                                    style={{ padding: '8px 14px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
                                >
                                    🛑 Hủy Kích Hoạt Đợt Này
                                </button>
                            )}
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
                        <form onSubmit={handleCreatePeriod} style={{ width: '310px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                            <style>{`
                                .calendar-click-overlay { position: relative; }
                                .calendar-click-overlay::-webkit-calendar-picker-indicator { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }
                            `}</style>

                            <h4 style={{color: 'var(--text-cyan)', margin: 0}}>🔒 MỞ ĐĂNG KÝ TÍN CHỈ MỚI</h4>
                            <input type="text" placeholder="Học kỳ (VD: HK1-2026)" value={periodForm.semester} onChange={e => setPeriodForm({...periodForm, semester: e.target.value})} required style={inputStyle} />
                            <label style={{fontSize:'13px', fontWeight: 'bold'}}>Thời gian bắt đầu:</label>
                            <input type="datetime-local" value={periodForm.startTime} onChange={e => setPeriodForm({...periodForm, startTime: e.target.value})} required className="calendar-click-overlay" style={inputStyle} />
                            <label style={{fontSize:'13px', fontWeight: 'bold'}}>Thời gian kết thúc:</label>
                            <input type="datetime-local" value={periodForm.endTime} onChange={e => setPeriodForm({...periodForm, endTime: e.target.value})} required className="calendar-click-overlay" style={inputStyle} />

                            <button type="submit" style={{ padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', marginTop: '5px' }}>
                                Kích Hoạt Đợt Mở Mới
                            </button>
                        </form>

                        <div style={{ flex: 1, minWidth: '450px', padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h4>📋 Danh sách môn học phần thuộc học kỳ: {selectedPeriod?.semester || 'Chưa chọn'}</h4>
                            <p style={{fontSize: '12px', color: 'var(--color-warning)', marginTop: 0, marginBottom: '12px'}}>
                                💡 <b>Tác vụ Admin:</b> Tích chọn checkbox để cho phép mở hoặc khóa môn học phần tương ứng của học kỳ đang xem.
                            </p>

                            <table style={tableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th>Mã Lớp HP</th><th>Tên Môn Học</th><th>Số Tín</th><th>Giảng Viên</th><th>Thời Khóa Biểu (Lịch học)</th><th style={{textAlign: 'center'}}>Tích Chọn Mở Môn</th>
                                </tr>
                                </thead>
                                <tbody>
                                {courseClasses
                                    .filter(c => c.semester === selectedPeriod?.semester)
                                    .map((cls) => (
                                        <tr key={cls.id} style={trStyle}>
                                            <td style={{fontWeight:'bold', color: 'var(--text-cyan)'}}>{cls.code}</td>
                                            <td>{cls.subjectName}</td>
                                            <td>{cls.credits} tín</td>
                                            <td>{cls.teacherName || 'Chưa phân công'}</td>
                                            <td style={{color:'var(--color-warning)', fontSize:'13px', fontWeight:'bold'}}>{cls.schedule || 'Chưa xếp'}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <input
                                                    type="checkbox"
                                                    checked={cls.openForRegistration}
                                                    onChange={() => handleToggleClassRegistration(cls.id)}
                                                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                {courseClasses.filter(c => c.semester === selectedPeriod?.semester).length === 0 && (
                                    <tr>
                                        <td colSpan="6" style={{textAlign:'center', padding:'20px', color:'var(--text-muted)'}}>Học kỳ này chưa được Admin mở lớp học phần nào ở trang Quản lý đào tạo.</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== 💼 VIEW TEACHER ==================== */}
            {role.includes('TEACHER') && !role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {isRegistrationTime ? (
                        <>
                            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                                <h3 style={{ color: 'var(--text-cyan)', marginTop: 0 }}>👨‍🏫 PHÊ DUYỆT ĐĂNG KÝ TÍN CHỈ</h3>
                                <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: 'bold' }}>Hệ thống đang mở đăng ký. Vui lòng chọn lớp bạn đang dạy để duyệt đơn:</label>
                                <select
                                    value={selectedClassId || ''}
                                    onChange={(e) => viewClassStudents(e.target.value)}
                                    style={{ width: '100%', padding: '10px', backgroundColor: 'var(--color-bg)', color: 'white', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' }}
                                >
                                    <option value="">-- Chọn lớp học phần --</option>
                                    {teacherClasses.map(c => (
                                        <option key={c.id} value={c.id}>{c.code} - {c.subjectName}</option>
                                    ))}
                                </select>
                            </div>

                            {selectedClassId && (
                                <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                                    <h4 style={{ marginTop: 0, color: 'white' }}>👥 Danh sách sinh viên đăng ký nộp đơn vào lớp</h4>
                                    <table style={tableStyle}>
                                        <thead>
                                        <tr style={thStyle}>
                                            <th>Sinh Viên Đăng Ký</th>
                                            <th style={{ textAlign: 'center' }}>Thao Tác Duyệt Đơn</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {classStudents.map((sv, i) => {
                                            const isApproved = localStorage.getItem(`approved_st_${selectedClassId}_${sv.id}`) === 'true';
                                            return (
                                                <tr key={i} style={trStyle}>
                                                    <td><b>{sv.firstName} {sv.lastName}</b> ({sv.studentCode})</td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <button
                                                            onClick={() => handleToggleApproveStudent(sv.id)}
                                                            style={{ padding: '6px 12px', backgroundColor: isApproved ? '#6c757d' : 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                                                        >
                                                            {isApproved ? 'Đã Duyệt (Hủy)' : 'Duyệt Đơn'}
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {classStudents.length === 0 && (
                                            <tr><td colSpan="2" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Chưa có sinh viên đăng ký lớp này đợt hiện tại.</td></tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    ) : (
                        <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px dashed var(--color-border)' }}>
                            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔒</div>
                            <h3 style={{ color: 'var(--color-warning)', margin: '0 0 5px 0' }}>CHƯA CÓ ĐỢT MỞ ĐĂNG KÝ TÍN CHỈ NÀO</h3>
                            <p style={{ margin: 0, fontSize: '13px' }}>Tính năng duyệt đơn chỉ hiển thị khi Phòng Đào tạo (Admin) mở cổng đăng ký.</p>
                        </div>
                    )}
                </div>
            )}

            {/* ==================== 🎓 VIEW STUDENT ==================== */}
            {role.includes('STUDENT') && !role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {isRegistrationTime ? (
                        <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ color: 'var(--text-cyan)', marginBottom: '15px', marginTop: 0 }}>🛒 DANH SÁCH MÔN HỌC MỞ ĐĂNG KÝ (TÍCH CHỌN)</h3>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                    <tr style={thStyle}>
                                        <th style={{ textAlign: 'center', width: '60px' }}>Chọn</th>
                                        <th>Mã Lớp HP</th>
                                        <th>Tên Môn Học</th>
                                        <th>Số Tín Chỉ</th>
                                        <th>Giảng Viên</th>
                                        <th>Thời Khóa Biểu</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {availableClasses.map(c => (
                                        <tr key={c.id} style={trStyle}>
                                            <td style={{ textAlign: 'center' }}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedClassIds.includes(c.id)}
                                                    onChange={() => {
                                                        setSelectedClassIds(prev => prev.includes(c.id) ? prev.filter(id => id !== c.id) : [...prev, c.id]);
                                                    }}
                                                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                />
                                            </td>
                                            <td style={{ fontWeight: 'bold', color: 'var(--text-cyan)' }}>{c.code}</td>
                                            <td>{c.subjectName}</td>
                                            <td>{c.credits} tín</td>
                                            <td>{c.teacherName || 'Chưa xếp'}</td>
                                            <td style={{ color: 'var(--color-warning)' }}>{c.schedule}</td>
                                        </tr>
                                    ))}
                                    {availableClasses.length === 0 && (
                                        <tr><td colSpan="6" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Không có môn học phần nào được mở đợt này.</td></tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                            {availableClasses.length > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
                                    <button
                                        onClick={handleBulkEnroll}
                                        style={{ padding: '10px 24px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                                    >
                                        Đăng Ký
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px dashed var(--color-border)' }}>
                            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔒</div>
                            <h3 style={{ color: 'var(--color-warning)', margin: '0 0 5px 0' }}>CỔNG ĐĂNG KÝ TÍN CHỈ ĐANG ĐÓNG</h3>
                            <p style={{ margin: 0, fontSize: '13px' }}>Vui lòng đợi thông báo chính thức từ Phòng Đào tạo (Admin) để thực hiện đăng ký mới.</p>
                        </div>
                    )}

                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--color-warning)', marginBottom: '15px', marginTop: 0 }}>📋 CÁC MÔN HỌC TRONG HỒ SƠ</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={tableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th style={{ textAlign: 'center', width: '90px' }}>Trạng thái</th>
                                    <th>Mã Lớp HP</th>
                                    <th>Tên Môn Học</th>
                                    <th>Số Tín Chỉ</th>
                                    <th>Giảng Viên</th>
                                    <th>Lịch Học</th>
                                </tr>
                                </thead>
                                <tbody>
                                {myRegisteredClasses.map(reg => {
                                    // Kiểm tra xem môn này có nằm trong đợt học kỳ đang mở hay không
                                    const isCurrentSemester = activePeriodInfo && reg.semester === activePeriodInfo.semester;
                                    // Kiểm tra giáo viên đã duyệt đơn này chưa
                                    const isApproved = localStorage.getItem(`approved_st_${reg.courseClassId}_${loggedInStudentId}`) === 'true';

                                    return (
                                        <tr key={reg.id} style={trStyle}>
                                            <td style={{ textAlign: 'center' }}>
                                                {(!isCurrentSemester || isApproved) ? (
                                                    <input type="checkbox" checked readOnly style={{ width: '18px', height: '18px', accentColor: 'var(--color-success)', cursor: 'default' }} />
                                                ) : (
                                                    <span style={{ color: 'var(--color-warning)', fontWeight: 'bold', fontSize: '13px' }}>⏳ Chờ duyệt</span>
                                                )}
                                            </td>
                                            <td style={{ fontWeight: 'bold', color: 'var(--text-cyan)' }}>{reg.courseClassCode}</td>
                                            <td>{reg.subjectName}</td>
                                            <td>{reg.credits} tín</td>
                                            <td>{reg.teacherName}</td>
                                            <td style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>{reg.schedule || 'Chưa xếp'}</td>
                                        </tr>
                                    );
                                })}
                                {myRegisteredClasses.length === 0 && (
                                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Chưa đăng ký môn học nào.</td></tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { padding: '8px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };
</file>

<file path="student-management-ui/src/pages/TeacherPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function TeacherPage() {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    // Khởi tạo chế độ sửa
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingTeacherId, setEditingTeacherId] = useState('');

    // Form States
    const [teacherCode, setTeacherCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    // List States dữ liệu gợi ý Dropdown
    const [departmentList, setDepartmentList] = useState([]);

    // STATE TÌM KIẾM MÃ GIẢNG VIÊN
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTeachers();
        fetchDepartmentList();
    }, []);

    const fetchTeachers = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/teachers');
            setTeachers(data);
        } catch (err) {
            console.error(err);
        } finally { // 🔥 ĐÃ SỬA: Thay thế từ khóa lỗi 'fill' thành 'finally' chuẩn cú pháp
            setLoading(false);
        }
    };

    const fetchDepartmentList = async () => {
        try {
            const data = await axiosClient.get('/departments');
            setDepartmentList(data);
        } catch (err) {
            console.error("Lỗi nạp danh sách khoa dropdown:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalError('');

        if (isEditMode) {
            const payload = { firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber };
            try {
                await axiosClient.put(`/teachers/${editingTeacherId}`, payload);
                alert("Cập nhật thông tin hồ sơ giảng viên thành công!");
                setShowModal(false);
                resetForm();
                fetchTeachers();
            } catch (err) { setModalError(err || 'Lỗi cập nhật hồ sơ giảng viên.'); }
        } else {
            if (!departmentId) { setModalError('Vui lòng chọn Khoa/Viện chuyên môn gợi ý!'); return; }
            const payload = { teacherCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, departmentId: Number(departmentId) };
            try {
                await axiosClient.post('/teachers', payload);
                alert(`Cấp tài khoản Giảng viên thành công!\nTài khoản: ${teacherCode}\nMật khẩu mặc định: password1234`);
                setShowModal(false);
                resetForm();
                fetchTeachers();
            } catch (err) { setModalError(err || 'Lỗi khởi tạo hồ sơ giảng viên.'); }
        }
    };

    const handleOpenEdit = (t) => {
        setIsEditMode(true);
        setEditingTeacherId(t.id);
        setTeacherCode(t.teacherCode);
        setFirstName(t.firstName);
        setLastName(t.lastName);
        setDateOfBirth(t.dateOfBirth || '');
        setGender(t.gender || 'Nam');
        setPhoneNumber(t.phoneNumber || '');
        setDepartmentId(''); // Khóa chỉnh sửa khoa khi đang sửa thông tin cá nhân để bảo vệ toàn vẹn dữ liệu
        setShowModal(true);
    };

    const handleLockTeacher = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn KHÓA tài khoản giảng viên [${code} - ${name}] không?\nTài khoản này sẽ lập tức bị đóng băng quyền truy cập.`)) {
            try {
                await axiosClient.delete(`/teachers/${id}`);
                alert('Đã khóa hồ sơ và đóng băng tài khoản giảng viên thành công!');
                fetchTeachers();
            } catch (err) { alert(err || 'Không thể thực hiện khóa giảng viên!'); }
        }
    };

    const handleUnlockTeacher = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn MỞ KHÓA lại cho giảng viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.put(`/teachers/${id}/enable`);
                alert('Mở khóa tài khoản và tái khôi phục quyền giảng dạy thành công!');
                fetchTeachers();
            } catch (err) { alert(err || 'Không thể thực hiện mở khóa giảng viên!'); }
        }
    };

    const resetForm = () => {
        setTeacherCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setDepartmentId(''); setModalError('');
        setIsEditMode(false); setEditingTeacherId('');
    };

    // BỘ LỌC TÌM KIẾM MÃ GIẢNG VIÊN REALTIME
    const filteredTeachers = teachers.filter(t =>
        t.teacherCode.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải danh sách giảng viên...</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>QUẢN LÝ DANH SÁCH GIẢNG VIÊN</h2>
                <button onClick={() => { resetForm(); setShowModal(true); }} style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-success)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    + Cấp Tài Khoản Giảng Viên
                </button>
            </div>

            {/* THANH TÌM KIẾM MÃ GIẢNG VIÊN */}
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>🔍 Tìm kiếm nhanh theo Mã giảng viên:</label>
                <input
                    type="text"
                    placeholder="Nhập mã số giảng viên cần tìm kiếm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', maxWidth: '400px', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none' }}
                />
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Giảng Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa Chuyên Môn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Giảng Dạy</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái hệ thống</th>
                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Hành Động Tác Vụ</th>
                </tr>
                </thead>
                <tbody>
                {filteredTeachers.map((t) => (
                    <tr key={t.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: t.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{t.teacherCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.lastName} {t.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{t.departmentName}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{t.email}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {t.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang giảng dạy</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa tài khoản</span>}
                        </td>
                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <button onClick={() => handleOpenEdit(t)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', fontWeight: 'bold' }}>Sửa</button>
                            {t.active ? (
                                <button onClick={() => handleLockTeacher(t.id, t.teacherCode, t.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                            ) : (
                                <button onClick={() => handleUnlockTeacher(t.id, t.teacherCode, t.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Mở Khóa</button>
                            )}
                        </td>
                    </tr>
                ))}
                {filteredTeachers.length === 0 && (
                    <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>Không có dữ liệu giảng viên tương thích với từ khóa tìm kiếm.</td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* MODAL CẤP TÀI KHOẢN / SỬA HỒ SƠ */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>{isEditMode ? '📝 CẬP NHẬT HỒ SƠ GIẢNG VIÊN' : '✍️ THÊM MỚI HỒ SƠ GIẢNG VIÊN'}</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Mã Giảng Viên:</label><input type="text" placeholder="GV2026_01" value={teacherCode} onChange={(e) => setTeacherCode(e.target.value)} required disabled={isEditMode} style={inputStyle} /></div>

                                {/* Dropdown menu bốc từ khoa chuyên môn thật dưới DB */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Khoa Chuyên Môn:</label>
                                    <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required disabled={isEditMode} style={inputStyle}>
                                        <option value="">{isEditMode ? '-- Không hoán đổi khoa --' : '-- Chọn khoa chuyên môn --'}</option>
                                        {departmentList.map(dept => <option key={dept.id} value={dept.id}>{dept.name} ({dept.code})</option>)}
                                    </select>
                                </div>

                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Họ Và Tên Đệm:</label><input type="text" placeholder="Trần Quốc" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Tên Giảng Viên:</label><input type="text" placeholder="Tuấn" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Số Điện Thoại:</label><input type="text" placeholder="0912345678" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>{isEditMode ? 'Lưu Thay Đổi' : 'Khởi Tạo & Cấp TK'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default TeacherPage;
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
		<relativePath/> </parent>
	<groupId>com.dangdepzaivaio</groupId>
	<artifactId>StudentManagement</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>StudentManagement</name>
	<description>Student Management System API</description>

	<properties>
		<java.version>26</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>

		<dependency>
			<groupId>com.nimbusds</groupId>
			<artifactId>nimbus-jose-jwt</artifactId>
			<version>9.37.3</version>
		</dependency>

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
			<version>1.6.3</version>
		</dependency>
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
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security-test</artifactId>
			<scope>test</scope>
		</dependency>
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/SecurityConfig.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        httpSecurity.authorizeHttpRequests(request -> request
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .requestMatchers("/auth/login", "/auth/change-password").permitAll()

                .requestMatchers(HttpMethod.POST, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**", "/users/**").hasRole("ADMIN")

                .requestMatchers(HttpMethod.GET, "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**").hasAnyRole("ADMIN", "TEACHER", "STUDENT")

                .requestMatchers(HttpMethod.POST, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.PUT, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.DELETE, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.GET, "/grades/**").hasAnyRole("ADMIN", "TEACHER", "STUDENT")

                .requestMatchers(HttpMethod.POST, "/registration/periods").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/registration/periods/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/registration/periods").hasAnyRole("ADMIN", "TEACHER", "STUDENT")
                .requestMatchers(HttpMethod.GET, "/registration/statistics").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/registration/course-class/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/registration/teacher/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.GET, "/registration/classes/**").hasAnyRole("ADMIN", "TEACHER")
                .requestMatchers(HttpMethod.GET, "/registration/open-course-classes", "/registration/my-classes").hasRole("STUDENT")
                .requestMatchers(HttpMethod.POST, "/registration/enroll").hasRole("STUDENT")
                .requestMatchers(HttpMethod.DELETE, "/registration/unenroll").hasRole("STUDENT")

                .anyRequest().authenticated());

        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:5173"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request) {
        return new ApiResponse<>(1000, "Tao nguoi dung thanh cong", userService.createUser(request));
    }

    @GetMapping
    public ApiResponse<List<UserResponse>> getAllUsers() {
        return new ApiResponse<>(1000, "Lay danh sach tai khoan thanh cong", userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public ApiResponse<UserResponse> getUser(@PathVariable String userId) {
        return new ApiResponse<>(1000, "Lay chi tiet tai khoan thanh cong", userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ApiResponse<UserResponse> updateUser(@PathVariable String userId, @RequestBody @Valid UserUpdateRequest request) {
        return new ApiResponse<>(1000, "Cap nhat tai khoan thanh cong", userService.updateUser(userId, request));
    }

    @PutMapping("/{userId}/enable")
    public ApiResponse<UserResponse> enableUser(@PathVariable String userId) {
        return new ApiResponse<>(1000, "Mo khoa tai khoan thanh cong", userService.enableUser(userId));
    }

    @PutMapping("/{userId}/reset-password")
    public ApiResponse<UserResponse> resetPassword(@PathVariable String userId, @RequestBody(required = false) Map<String, String> request) {
        String newPassword = request == null ? null : request.get("newPassword");
        return new ApiResponse<>(1000, "Reset mat khau thanh cong", userService.resetPassword(userId, newPassword));
    }

    @DeleteMapping("/{userId}")
    public ApiResponse<String> deleteUser(@PathVariable String userId) {
        userService.disableUser(userId);
        return new ApiResponse<>(1000, "Khoa tai khoan thanh cong", "ID " + userId + " da bi khoa");
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/GradeRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "WHERE g.student.id = :studentId")
    List<Grade> findByStudentId(@Param("studentId") String studentId);

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE cc.id = :courseClassId")
    List<Grade> findByCourseClassId(@Param("courseClassId") Long courseClassId);

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE s.id = :studentId AND cc.id = :courseClassId")
    Optional<Grade> findByStudentIdAndCourseClassId(
            @Param("studentId") String studentId,
            @Param("courseClassId") Long courseClassId
    );

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE g.id = :id")
    Optional<Grade> findByIdWithDetails(@Param("id") Long id);

    boolean existsByStudentIdAndCourseClassId(String studentId, Long courseClassId);
    boolean existsByCourseClassId(Long courseClassId);
    long countByCourseClassId(Long courseClassId);

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user")
    List<Grade> findAllGradesWithJoinFetch();

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "JOIN FETCH cc.teacher t " +
            "JOIN FETCH t.user " +
            "WHERE t.user.email = :email")
    List<Grade> findByCourseClassTeacherUserEmail(@Param("email") String email);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/StudentRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> { // 🔥 Khóa String
    boolean existsByStudentCode(String studentCode);
    boolean existsByStudentClassId(Long classId);

    @Query("SELECT s FROM Student s JOIN FETCH s.user u JOIN FETCH s.studentClass c WHERE s.isActive = true")
    List<Student> findAllActiveStudentsWithJoinFetch();

    @Query("SELECT s FROM Student s JOIN FETCH s.user u JOIN FETCH s.studentClass c")
    List<Student> findAllStudentsWithJoinFetch();

    @Query("SELECT s FROM Student s JOIN FETCH s.user JOIN FETCH s.studentClass WHERE s.id = :id")
    Optional<Student> findByIdWithJoinFetch(@Param("id") String id); // 🔥 Đổi sang tham số String id
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/UserService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserCreationRequest request);
    List<UserResponse> getAllUsers();
    UserResponse getUserById(String id);
    UserResponse updateUser(String id, UserUpdateRequest request);
    UserResponse enableUser(String id);
    UserResponse resetPassword(String id, String newPassword);
    void disableUser(String id);
}
</file>

<file path="student_management.sql">
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student_management
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_classes_name` (`name`),
  KEY `FK_classes_department` (`department_id`),
  CONSTRAINT `FK_classes_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D21CNPM1',1),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D22KHMT1',2),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D21DTVT2',3),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D22ATTT1',4),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D21HTTT1',5);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_classes`
--

DROP TABLE IF EXISTS `course_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_classes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_id` bigint NOT NULL,
  `teacher_id` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_course_classes_code` (`code`),
  KEY `FK_course_classes_subject` (`subject_id`),
  KEY `FK_course_classes_teacher` (`teacher_id`),
  CONSTRAINT `FK_course_classes_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `FK_course_classes_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','CPP_CLASS_01','HK1-2026',1,'GV_01'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DSA_CLASS_01','HK1-2026',2,'GV_02'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','JAVA_CLASS_01','HK1-2026',3,'GV_03'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','NET_CLASS_01','HK1-2026',4,'GV_04'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','OS_CLASS_01','HK1-2026',5,'GV_05');
/*!40000 ALTER TABLE `course_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_departments_code` (`code`),
  UNIQUE KEY `UK_departments_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','KHMT','Khoa học máy tính'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DTVT','Điện tử viễn thông'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','ATTT','An toàn thông tin'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HTTT','Hệ thống thông tin');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `student_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_class_id` bigint NOT NULL,
  `attendance_grade` double DEFAULT NULL,
  `midterm_grade` double DEFAULT NULL,
  `final_grade` double DEFAULT NULL,
  `overall_grade` double DEFAULT NULL,
  `letter_grade` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `grade_4` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_grades_student_course_class` (`student_id`,`course_class_id`),
  UNIQUE KEY `UKko1u7sub9pfixo5kagdclh8sj` (`student_id`,`course_class_id`),
  KEY `FK_grades_course_class` (`course_class_id`),
  CONSTRAINT `FK_grades_course_class` FOREIGN KEY (`course_class_id`) REFERENCES `course_classes` (`id`),
  CONSTRAINT `FK_grades_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=234 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_01',1,9,8.5,9,8.85,'A',4),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_02',2,8,8,8.5,8.3,'B+',3.5),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_03',3,10,9,9.5,9.4,'A',4),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_04',4,7.5,7,8,7.65,'B',3),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_05',5,6,6.5,7,6.75,'C+',2.5);
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_roles_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','ADMIN'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','STUDENT'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','TEACHER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `student_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `class_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_students_code` (`student_code`),
  KEY `FK_students_class` (`class_id`),
  CONSTRAINT `FK_students_class` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`),
  CONSTRAINT `FK_students_user` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('HS_01','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM001','Anh','Nguyễn Đình','2003-04-05','Nam','0987654321',1,1),('HS_02','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM002','Đăng','Trần Minh','2004-05-23','Nam','0987654322',1,2),('HS_03','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM003','Hải','Nguyễn Hoàng','2004-10-15','Nam','0987654323',1,3),('HS_04','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM004','Linh','Phạm Khánh','2004-05-20','Nữ','0987654324',1,4),('HS_05','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM005','Tùng','Vũ Sơn','2004-12-01','Nam','0987654325',1,5),('HS_06','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM006','Bình','Nguyễn Văn','2003-01-12','Nam','0981000006',1,1),('HS_07','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM007','Cường','Trần Mạnh','2003-02-14','Nam','0981000007',1,1),('HS_08','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM008','Dũng','Lê Hoàng','2003-03-16','Nam','0981000008',1,1),('HS_09','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM009','Đạt','Phạm Tiến','2003-04-18','Nam','0981000009',1,1),('HS_10','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM010','Giang','Vũ Trường','2003-05-20','Nam','0981000010',1,1),('HS_11','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM011','Hùng','Hoàng Minh','2003-06-22','Nam','0981000011',1,1),('HS_12','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM012','Huy','Phan Quốc','2003-07-24','Nam','0981000012',1,1),('HS_13','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM013','Khanh','Đỗ Duy','2003-08-26','Nam','0981000013',1,1),('HS_14','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM014','Linh','Đặng Nhật','2003-09-28','Nữ','0981000014',1,1),('HS_15','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM015','Minh','Bùi Quang','2003-10-30','Nam','0981000015',1,1),('HS_16','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM016','Nam','Nguyễn Hoài','2003-11-01','Nam','0981000016',1,1),('HS_17','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM017','Phong','Trần Thanh','2003-12-03','Nam','0981000017',1,1),('HS_18','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM018','Quân','Lê Anh','2003-05-05','Nam','0981000018',1,1),('HS_19','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM019','Sơn','Phạm Ngọc','2003-06-07','Nam','0981000019',1,1),('HS_20','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT001','Tâm','Vũ Đức','2004-01-10','Nam','0982000001',1,2),('HS_21','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT002','Tuấn','Hoàng Minh','2004-02-12','Nam','0982000002',1,2),('HS_22','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT003','Thành','Phan Công','2004-03-14','Nam','0982000003',1,2),('HS_23','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT004','Việt','Đỗ Quốc','2004-04-16','Nam','0982000004',1,2),('HS_24','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT005','Vy','Đặng Thu','2004-05-18','Nữ','0982000005',1,2),('HS_25','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT006','Yến','Bùi Hải','2004-06-20','Nữ','0982000006',1,2),('HS_26','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT007','Ngọc','Nguyễn Bích','2004-07-22','Nữ','0982000007',1,2),('HS_27','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT008','Long','Trần Bảo','2004-08-24','Nam','0982000008',1,2),('HS_28','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT009','Quang','Lê Minh','2004-09-26','Nam','0982000009',1,2),('HS_29','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT010','Tiến','Phạm Hồng','2004-10-28','Nam','0982000010',1,2),('HS_30','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT011','Trung','Vũ Đình','2004-11-30','Nam','0982000011',1,2),('HS_31','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT012','Tú','Hoàng Anh','2004-12-15','Nam','0982000012',1,2),('HS_32','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT013','Phước','Phan Gia','2004-08-11','Nam','0982000013',1,2),('HS_33','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT014','Hoàng','Đỗ Huy','2004-09-19','Nam','0982000014',1,2),('HS_34','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT001','An','Nguyễn Thành','2003-02-22','Nam','0983000001',1,3),('HS_35','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT002','Bách','Trần Xuân','2003-03-24','Nam','0983000002',1,3),('HS_36','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT003','Chi','Lê Linh','2003-04-26','Nữ','0983000003',1,3),('HS_37','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT004','Duy','Phạm Đức','2003-05-28','Nam','0983000004',1,3),('HS_38','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT005','Đông','Vũ Phương','2003-06-30','Nam','0983000005',1,3),('HS_39','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT006','Hà','Hoàng Thu','2003-07-12','Nữ','0983000006',1,3),('HS_40','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT007','Hiếu','Phan Trọng','2003-08-14','Nam','0983000007',1,3),('HS_41','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT008','Hoa','Đỗ Thị','2003-09-16','Nữ','0983000008',1,3),('HS_42','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT009','Hạnh','Đặng Thúy','2003-10-18','Nữ','0983000009',1,3),('HS_43','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT010','Khôi','Bùi Nguyên','2003-11-20','Nam','0983000010',1,3),('HS_44','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT011','Khoa','Nguyễn Đăng','2003-12-22','Nam','0983000011',1,3),('HS_45','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT012','Khánh','Trần Nhật','2003-01-25','Nam','0983000012',1,3),('HS_46','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT013','Kiên','Lê Trung','2003-02-27','Nam','0983000013',1,3),('HS_47','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT014','Lâm','Phạm Tùng','2003-03-29','Nam','0983000014',1,3),('HS_48','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT001','Mai','Vũ Tuyết','2004-03-11','Nữ','0984000001',1,4),('HS_49','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT002','Nghĩa','Hoàng Trọng','2004-04-13','Nam','0984000002',1,4),('HS_50','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT003','Nguyên','Phan Thảo','2004-05-15','Nữ','0984000003',1,4),('HS_51','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT004','Nhân','Đỗ Thành','2004-06-17','Nam','0984000004',1,4),('HS_52','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT005','Nhi','Đặng Thục','2004-07-19','Nữ','0984000005',1,4),('HS_53','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT006','Phát','Bùi Tấn','2004-08-21','Nam','0984000006',1,4),('HS_54','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT007','Phúc','Nguyễn Hồng','2004-09-23','Nam','0984000007',1,4),('HS_55','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT008','Phương','Trần Mai','2004-10-25','Nữ','0984000008',1,4),('HS_56','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT009','Phượng','Lê Thị','2004-11-27','Nữ','0984000009',1,4),('HS_57','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT010','Quốc','Phạm Anh','2004-12-29','Nam','0984000010',1,4),('HS_58','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT011','Quỳnh','Vũ Thúy','2004-01-05','Nữ','0984000011',1,4),('HS_59','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT012','Sang','Hoàng Tấn','2004-02-07','Nam','0984000012',1,4),('HS_60','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT013','Thảo','Phan Thu','2004-03-09','Nữ','0984000013',1,4),('HS_61','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT014','Thắng','Đỗ Đức','2004-04-11','Nam','0984000014',1,4),('HS_62','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT001','Thịnh','Đặng Hùng','2003-04-15','Nam','0985000001',1,5),('HS_63','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT002','Thư','Bùi Minh','2003-05-17','Nữ','0985000002',1,5),('HS_64','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT003','Thương','Nguyễn Hoài','2003-06-19','Nữ','0985000003',1,5),('HS_65','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT004','Trâm','Trần Ngọc','2003-07-21','Nữ','0985000004',1,5),('HS_66','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT005','Trí','Lê Minh','2003-08-23','Nam','0985000005',1,5),('HS_67','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT006','Trọng','Phạm Đức','2003-09-25','Nam','0985000006',1,5),('HS_68','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT007','Trực','Vũ Duy','2003-10-27','Nam','0985000007',1,5),('HS_69','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT008','Trường','Hoàng Xuân','2003-11-29','Nam','0985000008',1,5),('HS_70','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT009','Tường','Phan Cát','2003-12-31','Nam','0985000009',1,5),('HS_71','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT010','Vinh','Đỗ Quang','2003-01-05','Nam','0985000010',1,5),('HS_72','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT011','Vượng','Đặng Công','2003-02-07','Nam','0985000011',1,5),('HS_73','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT012','Xuyên','Bùi Hà','2003-03-09','Nữ','0985000012',1,5),('HS_74','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT013','Huy','Nguyễn Gia','2003-04-11','Nam','0985000013',1,5),('HS_75','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT014','Long','Trần Thượng','2003-05-13','Nam','0985000014',1,5);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credits` int NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_subjects_code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','C_PLUS_BASE',3,'Lập trình C++ cơ bản'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DSA_STRUCTURE',4,'Cấu trúc dữ liệu & Giải thuật'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','JAVA_WEB_DEV',3,'Lập trình Web nâng cao với Java'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','NET_COMPUTER',3,'Cơ sở mạng máy tính'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','OS_OPERATION',3,'Hệ điều hành máy tính');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `teacher_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `department_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_teachers_code` (`teacher_code`),
  KEY `FK_teachers_department` (`department_id`),
  CONSTRAINT `FK_teachers_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `FK_teachers_user` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES ('GV_01','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_01','Tuấn','Trần Quốc','1985-04-12','Nam','0912111222',1,1),('GV_02','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_02','Minh','Nguyễn Thị','1988-08-24','Nữ','0912333444',1,2),('GV_03','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_03','Nam','Lê Hoàng','1982-11-05','Nam','0912555666',1,3),('GV_04','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_04','Hải','Phạm Văn','1979-02-18','Nam','0912777888',1,4),('GV_05','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_05','Linh','Vũ Khánh','1991-06-30','Nữ','0912999000',1,5);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FK_user_roles_role` (`role_id`),
  CONSTRAINT `FK_user_roles_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FK_user_roles_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES ('AD',1),('HS_01',2),('HS_02',2),('HS_03',2),('HS_04',2),('HS_05',2),('HS_06',2),('HS_07',2),('HS_08',2),('HS_09',2),('HS_10',2),('HS_11',2),('HS_12',2),('HS_13',2),('HS_14',2),('HS_15',2),('HS_16',2),('HS_17',2),('HS_18',2),('HS_19',2),('HS_20',2),('HS_21',2),('HS_22',2),('HS_23',2),('HS_24',2),('HS_25',2),('HS_26',2),('HS_27',2),('HS_28',2),('HS_29',2),('HS_30',2),('HS_31',2),('HS_32',2),('HS_33',2),('HS_34',2),('HS_35',2),('HS_36',2),('HS_37',2),('HS_38',2),('HS_39',2),('HS_40',2),('HS_41',2),('HS_42',2),('HS_43',2),('HS_44',2),('HS_45',2),('HS_46',2),('HS_47',2),('HS_48',2),('HS_49',2),('HS_50',2),('HS_51',2),('HS_52',2),('HS_53',2),('HS_54',2),('HS_55',2),('HS_56',2),('HS_57',2),('HS_58',2),('HS_59',2),('HS_60',2),('HS_61',2),('HS_62',2),('HS_63',2),('HS_64',2),('HS_65',2),('HS_66',2),('HS_67',2),('HS_68',2),('HS_69',2),('HS_70',2),('HS_71',2),('HS_72',2),('HS_73',2),('HS_74',2),('HS_75',2),('GV_01',3),('GV_02',3),('GV_03',3),('GV_04',3),('GV_05',3);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_first_login` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_users_email` (`email`),
  UNIQUE KEY `UK_users_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('AD','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','admin@open.edu.vn','$2a$10$Nuln0JaFYxBJ92H8tcenfOS7il02iWjIQHp4BoNV.lsHJwiTAHqtu','admin',1,0),('GV_01','2026-06-10 06:16:53.000000','2026-06-10 09:03:59.718134','gv2026_01@open.edu.vn','$2a$10$.RGawvRE0Wxz0a.tXXPESOV9OJIVvuOrhBNjpXLzvbKPRo56czjLK','GV2026_01',1,0),('GV_02','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.356486','gv2026_02@open.edu.vn','$2a$10$xVRlLbPl.wnhQ0hXfENDN./uxbLfTwyOSX7.9ADaaHgQrIFh8f14i','GV2026_02',1,1),('GV_03','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.469802','gv2026_03@open.edu.vn','$2a$10$m1oc8MxjQXER0HiuqoY1reKDBRR73dr/k7p6vy/vUji.N2f8enXPC','GV2026_03',1,1),('GV_04','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.569917','gv2026_04@open.edu.vn','$2a$10$cMKoa2WK0FetlKLRidzWX.tfC0U.39iJ0FFtx4xIXFq985hzkV7wW','GV2026_04',1,1),('GV_05','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.665974','gv2026_05@open.edu.vn','$2a$10$F4jnw/VglMPV5keV3WTm0eDHcIBgaZ6pF35zlxMVQ02vXZsZrMEXS','GV2026_05',1,1),('HS_01','2026-06-10 06:16:53.000000','2026-06-10 09:05:31.412679','b21cnpm001@open.edu.vn','$2a$10$7bkFYKJvL.OMBgeUGMw/r.GhddEa1HWNIRsLrVnoF2VE22.oYfDSC','B21CNPM001',1,0),('HS_02','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.764012','b21cnpm002@open.edu.vn','$2a$10$9YPi4NVJPRcHQuPaaGJrZeiMDbb2MSKzgIOl56WwBgrT27zct3OZG','B21CNPM002',1,1),('HS_03','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.863545','b21cnpm003@open.edu.vn','$2a$10$on5UjQGlulZu44qMfo59TORT09PqEw/ZpN9qSzSnjn3PRbZ22qw/O','B21CNPM003',1,1),('HS_04','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.960249','b21cnpm004@open.edu.vn','$2a$10$MugjdSVqlHUOQ2iIUcSkauNC9n7qSwb/HV6PBWpCnFKTaSu0oF37u','B21CNPM004',1,1),('HS_05','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.064485','b21cnpm005@open.edu.vn','$2a$10$Vg7UbDj/esMRqNeUFsm7yOadmGnL/AsyAjtSrlEziYiNG3EbmSFQa','B21CNPM005',1,1),('HS_06','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.160788','b21cnpm006@open.edu.vn','$2a$10$YEzWbW9GYwLRsioLcuBS0uUNDdTjqzU74E/qhSPEYGl32pz2ce8bC','B21CNPM006',1,1),('HS_07','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.271347','b21cnpm007@open.edu.vn','$2a$10$t4ta8IpYML38tgq3E1H9uOKuhapAPJuPSmv8MzMgL5vS.aN2XChOS','B21CNPM007',1,1),('HS_08','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.377376','b21cnpm008@open.edu.vn','$2a$10$FTFlq1mfI/qCAVMTdl70kuv85a9j7v2ReX4r8xuFYTuNEraYEp1Ey','B21CNPM008',1,1),('HS_09','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.479662','b21cnpm009@open.edu.vn','$2a$10$bsx70KVBHD8bH2lPPZ.UPOwg/bCcmUPFJrk7hFxyv.ChlSk5C8RKi','B21CNPM009',1,1),('HS_10','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.577040','b21cnpm010@open.edu.vn','$2a$10$nXtvYBuZZn.B2l2zHFtHne8gTs0j6w5jUEQWHzmMpUyUzFxXY.Q5a','B21CNPM010',1,1),('HS_11','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.673554','b21cnpm011@open.edu.vn','$2a$10$3XfvwdzFsviYrdfq2Y2FWOrsKXCVwselaoPHC09eNq126IdEwmE4O','B21CNPM011',1,1),('HS_12','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.773053','b21cnpm012@open.edu.vn','$2a$10$xKHpqd5.cns0YxYIHTT.CuHyjrJQiosEGMlEgiJeqCRkpPYYgGTgK','B21CNPM012',1,1),('HS_13','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.872714','b21cnpm013@open.edu.vn','$2a$10$pWUVa7LPRGVFYKG3fgyUv.Rd5VFb11.jrNfQEd6AXqdEE.EhCD.CG','B21CNPM013',1,1),('HS_14','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.970166','b21cnpm014@open.edu.vn','$2a$10$V46G1EQ2SyLRh/ALvtVa7u2PILB2bNSiIASbjA2rqW6cJN7zXCUjy','B21CNPM014',1,1),('HS_15','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.069406','b21cnpm015@open.edu.vn','$2a$10$AUDuzCuSr/LvyzrDsXbH/ORjkQVlt4bJLdDa5feaWpghi3I8Sr3wC','B21CNPM015',1,1),('HS_16','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.165639','b21cnpm016@open.edu.vn','$2a$10$n6BJPyCDPAxAFkDJjASY9u5X5NPFiUhPwiJaPNuoVsRFSGwJIYJoa','B21CNPM016',1,1),('HS_17','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.263094','b21cnpm017@open.edu.vn','$2a$10$Al.mDKuM4zZINQuzMBJGquWnDXQDm0ESFahm75mU5IYODIUAoq5OO','B21CNPM017',1,1),('HS_18','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.362424','b21cnpm018@open.edu.vn','$2a$10$LSbiXDRpQ6DAYxtNuV1wdO0apnKeaEmbUDMVAwuapPX/GhvazKEZu','B21CNPM018',1,1),('HS_19','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.466864','b21cnpm019@open.edu.vn','$2a$10$uM7Ao4ts8cxpZIkn5lzZFe7UlJWmXXc3bdMlsuC2Wixbi4xNsV4Pm','B21CNPM019',1,1),('HS_20','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.568504','b22khmt001@open.edu.vn','$2a$10$LHMXLaq8Ibm.zz3njXl6nuqulAi7YVzd2yjq74To0mN9hI9JxbCx6','B22KHMT001',1,1),('HS_21','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.673930','b22khmt002@open.edu.vn','$2a$10$CD0xaw6l6/FSgZHJ0woMTeVjv3Db4RXP5PmHSck8kJwZrPOgelqte','B22KHMT002',1,1),('HS_22','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.782310','b22khmt003@open.edu.vn','$2a$10$.tEMweY46IlMpVWAKFCRbOPTFE/TJ7I7c28Ranm0tGqDIkFAffXlK','B22KHMT003',1,1),('HS_23','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.886469','b22khmt004@open.edu.vn','$2a$10$GeKmCyYkIGH1uCXxfKKqseUPo0HZNbMKUQSZUp7S9Ps1qtDu3mI/6','B22KHMT004',1,1),('HS_24','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.992611','b22khmt005@open.edu.vn','$2a$10$iKbF9RzouVpms9LwzlaZsemr7Xdy8TssD1eIMhihLmx4BzdtWkpRi','B22KHMT005',1,1),('HS_25','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.091567','b22khmt006@open.edu.vn','$2a$10$mi0StUmvBzOQV/uulUuUNOT0qIE91rlWYiMB4tAiH8Uqj7abr0PIa','B22KHMT006',1,1),('HS_26','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.188505','b22khmt007@open.edu.vn','$2a$10$Qz3izIg8Hnjq/00r6nximOkRLgMZ2rnaEjEObIIjIR1LjcxkwRN4W','B22KHMT007',1,1),('HS_27','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.294118','b22khmt008@open.edu.vn','$2a$10$vmi/kjoAqS4Q7S/ehrEqteLoE26XG7xvr0hIVbIWvf9s9u5BEvVX2','B22KHMT008',1,1),('HS_28','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.399726','b22khmt009@open.edu.vn','$2a$10$az5c7ANg7QMuY4/Fg7IQMe15pqGZ5PxeDaCkhQEmoi/snAew.dybG','B22KHMT009',1,1),('HS_29','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.519372','b22khmt010@open.edu.vn','$2a$10$1LtCkPD.ZanhgXPLLeB..uvOU.opz1A0GpIWNgR.j5vHyONCZLCvC','B22KHMT010',1,1),('HS_30','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.627876','b22khmt011@open.edu.vn','$2a$10$f438q6r2Tg82j3pS5SeGTeHhIdyE7ZItvm2svKNhYmoIA8LZtiaBK','B22KHMT011',1,1),('HS_31','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.731051','b22khmt012@open.edu.vn','$2a$10$Og4syPafSgY2kE2vruTJEu2VfcD3lVqVrPYzSSUtigLOnpM3ZdQVy','B22KHMT012',1,1),('HS_32','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.830395','b22khmt013@open.edu.vn','$2a$10$MS2/DUOpIZDxH0dwVh2cX.fcsH9D/KVLBdmE0fY6gogGFUwZO/GoK','B22KHMT013',1,1),('HS_33','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.934205','b22khmt014@open.edu.vn','$2a$10$N5LNoyI9QMExBujaSl4SreOkgrAt5vK26Jj1M3UHhqjzVo/LCmo8O','B22KHMT014',1,1),('HS_34','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.039301','b21dtvt001@open.edu.vn','$2a$10$HjPFwIST.PRzZRC6/cXJoOlpxQUY3wJCMIpUcCSZ/L77NgE9ybTUG','B21DTVT001',1,1),('HS_35','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.147823','b21dtvt002@open.edu.vn','$2a$10$ZFdJ1pex5xVyXLsEGS7AheK5TJZ4oEiXysHhJhTTJUPMZjSgjERq.','B21DTVT002',1,1),('HS_36','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.252309','b21dtvt003@open.edu.vn','$2a$10$c4yMex.OZO7BbXJvCNXfx.kRXPdl.fTVFy5EMNH.y7dKtRXlnbFey','B21DTVT003',1,1),('HS_37','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.352462','b21dtvt004@open.edu.vn','$2a$10$98J3Zo6cy3DU8NUHE10yPOU4WuQT5U4Vcyi7Crogy3ZYum5hik/cm','B21DTVT004',1,1),('HS_38','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.455277','b21dtvt005@open.edu.vn','$2a$10$uPJNy/JZTeIXzWodRPQJwOJV0oe4APLllldnuHxmjkdOfQSIQIn7.','B21DTVT005',1,1),('HS_39','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.552515','b21dtvt006@open.edu.vn','$2a$10$iaUjCY3OHBBPaKfRPPKNQO0EsU4yxrceit2c8wufKZcuCqL.xMy6a','B21DTVT006',1,1),('HS_40','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.661477','b21dtvt007@open.edu.vn','$2a$10$T3/ZkOsSfw6Tr1n.zBjjBOWUMaClDnjwTY5O0lV1.N90U9/LrG0nO','B21DTVT007',1,1),('HS_41','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.759405','b21dtvt008@open.edu.vn','$2a$10$2g4wsLmKcnOHVaHTfnES1uikLj3auDywcGzpOeS41SJ0ee1eAs2jq','B21DTVT008',1,1),('HS_42','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.857100','b21dtvt009@open.edu.vn','$2a$10$Aii0QRsAC8a0s6eQxZNCNezYoAcXwqdak3C5YQYowGbe94YaxpmQC','B21DTVT009',1,1),('HS_43','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.960693','b21dtvt010@open.edu.vn','$2a$10$hwngUEV3A3RJ7tsaNoKGjek9NQqAsHv2FhOZm/XMKn3SxwVVzZKde','B21DTVT010',1,1),('HS_44','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.067755','b21dtvt011@open.edu.vn','$2a$10$/NsJowOSNpWsF8enIISHl.ogccdYIZcA8PYPq3KmQ2ziY5SOh5qem','B21DTVT011',1,1),('HS_45','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.172172','b21dtvt012@open.edu.vn','$2a$10$D2QsVIiuliEQBdLIP8GzwuoqOCVdATuQyrs5g39/hq/KGBDWKbuuC','B21DTVT012',1,1),('HS_46','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.272045','b21dtvt013@open.edu.vn','$2a$10$nxmNZN9pvnNQEIFC9KP4AOAZ1m1aILWUtUnn4Xsk9FjiYs3jaVusK','B21DTVT013',1,1),('HS_47','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.373255','b21dtvt014@open.edu.vn','$2a$10$tbbaXFtZpp1g6q5R1RaxbugMH4KtJ/ujDCVnR3CeCAPsY4JWCromi','B21DTVT014',1,1),('HS_48','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.487328','b22attt001@open.edu.vn','$2a$10$mJ4tXqhS8.8wjnVwcbHp4utmNav4PdspEBbSgkEElDLC6qLUhqGam','B22ATTT001',1,1),('HS_49','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.610425','b22attt002@open.edu.vn','$2a$10$GZMQRzf2d2BWjjVgofBbFO1f91UtrA5ijDRuluOgnMT8oHOs7IkP6','B22ATTT002',1,1),('HS_50','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.729181','b22attt003@open.edu.vn','$2a$10$ane5OIKDlAnSg9CLBi8/r.TcU4G4X1ahI.dNKEg8GKoHGa9ySocv.','B22ATTT003',1,1),('HS_51','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.844046','b22attt004@open.edu.vn','$2a$10$s0/8oztoM9djJ4wmUQ5qq.7DTfyImbXFiVIgsyBNBVt74zjBEVSdq','B22ATTT004',1,1),('HS_52','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.958703','b22attt005@open.edu.vn','$2a$10$jbhJjhyFWPVvka3MvbawbO.T/pEwXkUiXSbq0HHqpO2syrRMsMjSC','B22ATTT005',1,1),('HS_53','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.068866','b22attt006@open.edu.vn','$2a$10$e5hWKwqgfHdniSUc0/rP4.D5VsKgMuk1XgUSyJOIjvkQAJpYUIosi','B22ATTT006',1,1),('HS_54','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.176601','b22attt007@open.edu.vn','$2a$10$1D2Was7/tb4fvtPdMhBeGeAqC7qiYCww/QzkIi7fTeOXyJgEs.MEK','B22ATTT007',1,1),('HS_55','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.285418','b22attt008@open.edu.vn','$2a$10$gJ7RaVhRVe9CgatTdCzH6OqiImqWmXC0HU67N8H4L63RZVpOFWj5O','B22ATTT008',1,1),('HS_56','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.387477','b22attt009@open.edu.vn','$2a$10$dowfK62h.zr3cI.7bglGjub6LdKXPkg3iEs.HPbcAF5KiP7vW5zqq','B22ATTT009',1,1),('HS_57','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.486792','b22attt010@open.edu.vn','$2a$10$4X2Lar8AQf.CsGTT0fUXKOBN4OasdoZeWRidB5DE.aTMHfYQpBjJK','B22ATTT010',1,1),('HS_58','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.584695','b22attt011@open.edu.vn','$2a$10$Wh5zlj9ddY0F/0qNGZwP3OkvFyHdifMiqvgweeuXQLJO/LZ1x/lWm','B22ATTT011',1,1),('HS_59','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.684449','b22attt012@open.edu.vn','$2a$10$slEOhUledQkBeUtbB8YAgeqdF6ww6HDFfMzC4cwJWu0hJ59kNR09C','B22ATTT012',1,1),('HS_60','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.780955','b22attt013@open.edu.vn','$2a$10$.BVaP/GdGt5JfNPxEuZwIePyNe3p4yVV5srAbs.KKkapUQ.NrPcPm','B22ATTT013',1,1),('HS_61','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.877333','b22attt014@open.edu.vn','$2a$10$SI.uD713ltuIzgJ0VgVFVeZIYNjiUtuOKDXkGfa3pDpnPYEO7Vj7u','B22ATTT014',1,1),('HS_62','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.044317','b21httt001@open.edu.vn','$2a$10$dKjJpUS3IklssL47TPqVie34IDu7zbVWg/9sH7moRqFdurI9ufcT.','B21HTTT001',1,1),('HS_63','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.222250','b21httt002@open.edu.vn','$2a$10$mxO8aHRFQzF/3LSWVDHrb.Kp7KGJ0ID1aNgShMJqRyKmUIuGL69uy','B21HTTT002',1,1),('HS_64','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.381542','b21httt003@open.edu.vn','$2a$10$n2APctre735no2cqk4jVX.VxNsj9HVgQERteLPpEL0Mw3rPgBEV2a','B21HTTT003',1,1),('HS_65','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.539373','b21httt004@open.edu.vn','$2a$10$7HAPtw0U70LvhvdhdVSUEuavYQEIlmkTY9uVSyvnTha790uGOE.ZG','B21HTTT004',1,1),('HS_66','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.726112','b21httt005@open.edu.vn','$2a$10$DU5UH/CJisZduSrl51PdFun/nYGPC0bo.sCuux4Cj2JR0zn.rO4yK','B21HTTT005',1,1),('HS_67','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.909696','b21httt006@open.edu.vn','$2a$10$bUFVwHo0dImrsUFaOpowZ.mejsm7l0nM1hXWxzkuNJAq8NxQA1sum','B21HTTT006',1,1),('HS_68','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.080902','b21httt007@open.edu.vn','$2a$10$1l17VsDTCHxvxPMy3PUBF.21PENy3pN1qK.ThR8LTE6zZfZ2UeV0q','B21HTTT007',1,1),('HS_69','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.210738','b21httt008@open.edu.vn','$2a$10$/qww584wr00nxjkgziaIIeK4UMswu63IYOZNImuuCaAKnFIg3Dl06','B21HTTT008',1,1),('HS_70','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.378097','b21httt009@open.edu.vn','$2a$10$chC8zxi0Ws61KInLkJ98Ke/FIiEBA/uFalR9Bq2YnJdHXgSNPShiS','B21HTTT009',1,1),('HS_71','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.551319','b21httt010@open.edu.vn','$2a$10$BuND6CX58Pi3Hhe7j64R4.nSWb.CEvscaRWh4qHZjCVgCYzYcJCzC','B21HTTT010',1,1),('HS_72','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.679195','b21httt011@open.edu.vn','$2a$10$hKZBE6nKkElpKrmyELbiNOqhDVGxAjp9CJUwC876lGRV5tCQVWttq','B21HTTT011',1,1),('HS_73','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.797086','b21httt012@open.edu.vn','$2a$10$pkbLt/xwKOXMDxfA/cx4PebTdVWjzM.J.cnqobO7MKkeUnrPEGc8W','B21HTTT012',1,1),('HS_74','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.946957','b21httt013@open.edu.vn','$2a$10$rt1PV.KBcMaqsfk.DHXJbuaudcdoT.vk.yX/A7WMR/fn9apBALBdW','B21HTTT013',1,1),('HS_75','2026-06-10 06:16:53.000000','2026-06-10 10:39:32.105871','b21httt014@open.edu.vn','$2a$10$eSd.jmV261I6jqrpdELMK.NOrHoHmQI5QLi4IP.8N4DBlR7XhrWea','B21HTTT014',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-10 17:56:00
</file>

<file path="student-management-ui/src/App.jsx">
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import GradePage from './pages/GradePage';
import RegistrationPage from './pages/RegistrationPage';
import TrainingPage from './pages/TrainingPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [role, setRole] = useState(localStorage.getItem('roles') || '');
    const [activeTab, setActiveTab] = useState('dashboard');

    const executeLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('roles');
        localStorage.removeItem('userId');
        localStorage.removeItem('studentId');
        localStorage.removeItem('teacherId');
        localStorage.removeItem('lastExitTime');

        setToken(null);
        setUsername(null);
        setRole('');
    };

    useEffect(() => {
        const checkSession = () => {
            const lastExitTime = localStorage.getItem('lastExitTime');
            const currentToken = localStorage.getItem('token');

            if (currentToken && lastExitTime) {
                const timeAway = Date.now() - parseInt(lastExitTime, 10);
                const FIFTEEN_MINUTES = 15 * 60 * 1000;

                if (timeAway > FIFTEEN_MINUTES) {
                    executeLogout();
                    alert("Phiên làm việc của bạn đã hết hạn do không hoạt động trong 15 phút. Vui lòng đăng nhập lại!");
                } else {
                    localStorage.removeItem('lastExitTime');
                }
            }
        };

        checkSession();

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                localStorage.setItem('lastExitTime', Date.now().toString());
            } else if (document.visibilityState === 'visible') {
                checkSession();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        const handleBeforeUnload = () => {
            localStorage.setItem('lastExitTime', Date.now().toString());
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleLogout = () => {
        executeLogout();
    };

    if (!token) {
        return <LoginPage />;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)' }}>

            {/* HEADER SYSTEM */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-sm) var(--spacing-xl)', backgroundColor: 'var(--color-surface)', color: 'var(--text-main)', borderBottom: '2px solid var(--text-cyan)' }}>
                <h3>CMS - STUDENT MANAGEMENT</h3>
                <div>
                    <span style={{ marginRight: 'var(--spacing-xl)', color: 'var(--text-muted)' }}>Xin chào: <b>{username}</b> ({role})</span>
                    <button onClick={handleLogout} style={{ padding: '6px 12px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Đăng xuất</button>
                </div>
            </div>

            {/* BODY SYSTEM */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                {/* SIDEBAR NAVIGATION */}
                <div style={{ width: '240px', backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl) var(--spacing-sm)', borderRight: '1px solid var(--color-border)' }}>
                    <button onClick={() => setActiveTab('dashboard')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'dashboard' ? 'var(--color-primary)' : 'transparent' }}>📊 Tổng Quan System</button>

                    {(role.includes('ADMIN') || role.includes('TEACHER')) && (
                        <button onClick={() => setActiveTab('students')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'students' ? 'var(--color-primary)' : 'transparent' }}>👥 Quản Lý Sinh Viên</button>
                    )}

                    {role.includes('ADMIN') && (
                        <button onClick={() => setActiveTab('teachers')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'teachers' ? 'var(--color-primary)' : 'transparent' }}>💼 Quản Lý Giảng Viên</button>
                    )}

                    <button onClick={() => setActiveTab('grades')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'grades' ? 'var(--color-primary)' : 'transparent' }}>🎯 Quản Lý Điểm Số</button>

                    {/* 🔥 ĐÃ FIX: Cho phép cả ADMIN, STUDENT và TEACHER nhìn thấy phân hệ này */}
                    {(role.includes('ADMIN') || role.includes('STUDENT') || role.includes('TEACHER')) && (
                        <button onClick={() => setActiveTab('registration')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'registration' ? 'var(--color-primary)' : 'transparent' }}>⏰ Đăng Ký Tín Chỉ</button>
                    )}

                    {(role.includes('TEACHER') || role.includes('STUDENT')) && (
                        <button onClick={() => setActiveTab('schedule')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'schedule' ? 'var(--color-primary)' : 'transparent' }}>
                            📅 {role.includes('TEACHER') ? 'Lịch Dạy' : 'Lịch Học'}
                        </button>
                    )}

                    {role.includes('ADMIN') && (
                        <button onClick={() => setActiveTab('training')} style={{ ...sidebarBtnStyle, backgroundColor: activeTab === 'training' ? 'var(--color-primary)' : 'transparent' }}>🏛️ Quản Lý Đào Tạo</button>
                    )}
                </div>

                {/* MAIN CONTENT AREA */}
                <div style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--color-bg)', padding: 'var(--spacing-xl)' }}>
                    {activeTab === 'dashboard' && <DashboardPage />}
                    {activeTab === 'students' && <StudentPage />}
                    {activeTab === 'teachers' && <TeacherPage />}
                    {activeTab === 'grades' && <GradePage />}
                    {activeTab === 'registration' && <RegistrationPage />}
                    {activeTab === 'schedule' && <SchedulePage />}
                    {activeTab === 'training' && <TrainingPage />}
                </div>

            </div>
        </div>
    );
}

const sidebarBtnStyle = { width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' };

export default App;
</file>

<file path="student-management-ui/src/pages/StudentPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function StudentPage() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const userRole = localStorage.getItem('roles') || '';
    const isAdmin = userRole.includes('ADMIN');
    const isTeacher = userRole.includes('TEACHER');
    const teacherId = localStorage.getItem('teacherId') || '';

    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingStudentId, setEditingStudentId] = useState('');

    // Form States
    const [studentCode, setStudentCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [classId, setClassId] = useState('');
    const [studentCohort, setStudentCohort] = useState('Khóa 1');

    // List States tải từ DB phục vụ Admin
    const [classList, setClassList] = useState([]);
    const [departments, setDepartments] = useState([]);

    // --- STATES BỘ LỌC CASCADING CHO ADMIN ---
    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // --- STATES ĐỘC QUYỀN CHO GIẢNG VIÊN (TEACHER) ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedCourseClass, setSelectedCourseClass] = useState('');

    // Danh sách khóa mặc định của hệ thống
    const [cohorts, setCohorts] = useState(() => {
        const saved = localStorage.getItem('system_cohorts');
        return saved ? JSON.parse(saved) : ['Khóa 1', 'Khóa 2', 'Khóa 3'];
    });

    useEffect(() => {
        if (isAdmin) {
            fetchStudents();
            loadFiltersData();
        } else if (isTeacher && teacherId) {
            fetchTeacherClasses();
        }
    }, [isAdmin, isTeacher, teacherId]);

    // ==================== 🏛️ NGHIỆP VỤ CỦA ADMIN ====================
    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/students?includeInactive=true');
            setStudents(data || []);
        } catch (err) {
            setError(err || 'Không thể tải danh sách sinh viên!');
        } finally {
            setLoading(false);
        }
    };

    const loadFiltersData = async () => {
        try {
            const [deptsData, classesData] = await Promise.all([
                axiosClient.get('/departments'),
                axiosClient.get('/classes')
            ]);
            setDepartments(deptsData || []);
            setClassList(classesData || []);
        } catch (err) {
            console.error('Lỗi nạp cấu trúc bộ lọc danh mục', err);
        }
    };

    const handleAddNewCohort = () => {
        const nextCohortNumber = cohorts.length + 1;
        const newCohortName = `Khóa ${nextCohortNumber}`;
        const updatedCohorts = [...cohorts, newCohortName];
        setCohorts(updatedCohorts);
        localStorage.setItem('system_cohorts', JSON.stringify(updatedCohorts));
        alert(`Khởi tạo đợt niên khóa đào tạo mới thành công: ${newCohortName}!`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!classId) { alert("Vui lòng lựa chọn một Lớp hành chính!"); return; }

        if (isEditMode) {
            const payload = { firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId), cohort: studentCohort };
            try {
                await axiosClient.put(`/students/${editingStudentId}`, payload);
                alert("Cập nhật hồ sơ sinh viên thành công!");
                setShowModal(false);
                resetForm();
                fetchStudents();
            } catch (err) { alert(err || 'Lỗi cập nhật hồ sơ!'); }
        } else {
            const payload = { studentCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId), cohort: studentCohort };
            try {
                await axiosClient.post('/students', payload);
                alert(`Cấp tài khoản sinh viên thành công mượt mà!`);
                setShowModal(false);
                resetForm();
                fetchStudents();
            } catch (err) { alert(err || 'Có lỗi xảy ra khi tạo sinh viên!'); }
        }
    };

    const handleOpenEdit = (student) => {
        setIsEditMode(true);
        setEditingStudentId(student.id);
        setStudentCode(student.studentCode);
        setFirstName(student.firstName);
        setLastName(student.lastName);
        setDateOfBirth(student.dateOfBirth || '');
        setGender(student.gender || 'Nam');
        setPhoneNumber(student.phoneNumber || '');
        setClassId(student.classId || '');
        setStudentCohort(student.cohort || 'Khóa 1');
        setShowModal(true);
    };

    const handleDeleteStudent = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn KHÓA tài khoản sinh viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.delete(`/students/${id}`);
                alert('Đã khóa hồ sơ sinh viên và đóng băng tài khoản thành công!');
                fetchStudents();
            } catch (err) { alert(err || 'Không thể khóa sinh viên này!'); }
        }
    };

    const handleEnableStudent = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn MỞ KHÓA cho sinh viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.put(`/students/${id}/enable`);
                alert('Tái kích hoạt hệ thống và mở khóa tài khoản thành công!');
                fetchStudents();
            } catch (err) { alert(err || 'Không thể mở khóa sinh viên này!'); }
        }
    };

    const resetForm = () => {
        setStudentCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setClassId(''); setStudentCohort('Khóa 1');
        setIsEditMode(false); setEditingStudentId('');
    };

    const handleDeptChange = (deptId) => {
        setSelectedDept(deptId);
        setSelectedClass('');
    };

    const handleClassChange = (classId) => {
        setSelectedClass(classId);
        if (classId) {
            const clsObj = classList.find(c => c.id === Number(classId));
            if (clsObj) {
                const matchedDept = departments.find(d => d.name === clsObj.departmentName);
                if (matchedDept) setSelectedDept(String(matchedDept.id));
            }
        }
    };

    const filteredClassOptions = selectedDept
        ? classList.filter(c => c.departmentName === departments.find(d => d.id === Number(selectedDept))?.name)
        : classList;


    // ==================== 👨‍🏫 NGHIỆP VỤ CỦA GIẢNG VIÊN (TEACHER) ====================
    const fetchTeacherClasses = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
            const data = response || [];
            setTeacherClasses(data);
            if (data.length > 0) {
                // Tự động load trước sinh viên của lớp học phần đầu tiên
                setSelectedCourseClass(String(data[0].id));
                fetchStudentsInCourseClass(data[0].id);
            } else {
                setStudents([]);
                setLoading(false);
            }
        } catch (err) {
            setError('Không thể tải lịch trình lớp học phần đang dạy!');
            setLoading(false);
        }
    };

    const fetchStudentsInCourseClass = async (courseClassId) => {
        try {
            setLoading(true);
            const response = await axiosClient.get(`/registration/classes/${courseClassId}/students`);
            setStudents(response || []);
        } catch (err) {
            setError('Lỗi tải danh sách sinh viên thuộc lớp học phần phụ trách!');
        } finally {
            setLoading(false);
        }
    };

    const handleTeacherClassChange = (courseClassId) => {
        setSelectedCourseClass(courseClassId);
        if (courseClassId) {
            fetchStudentsInCourseClass(courseClassId);
        } else {
            setStudents([]);
        }
    };


    // ==================== 🔄 THUẬT TOÁN QUÉT MẢNG LỌC HIỂN THỊ CHUNG ====================
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.studentCode.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
            `${student.lastName} ${student.firstName}`.toLowerCase().includes(searchQuery.trim().toLowerCase());

        if (isAdmin) {
            const matchesCohort = !selectedCohort || student.cohort === selectedCohort;
            const matchesClass = !selectedClass || student.classId === Number(selectedClass);
            const selectedDeptObj = departments.find(d => d.id === Number(selectedDept));
            const matchesDept = !selectedDept || student.departmentName === selectedDeptObj?.name;
            return matchesSearch && matchesCohort && matchesDept && matchesClass;
        }

        return matchesSearch; // Với Giáo viên chỉ cần lọc theo ô tìm kiếm trên mảng sinh viên lớp học phần
    });

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang đồng bộ cơ sở dữ liệu học viên...</div>;
    if (error) return <div style={{ color: 'var(--color-danger)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>{error}</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>

            {/* THANH ĐIỀU HƯỚNG TIÊU ĐỀ */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                    <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>
                        {isAdmin ? '🏛️ HỆ THỐNG QUẢN TRỊ SINH VIÊN' : '👨‍🏫 DANH SÁCH SINH VIÊN ĐANG GIẢNG DẠY'}
                    </h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                        {isAdmin ? 'Quyền hạn Quản trị viên: Toàn quyền khởi tạo, chỉnh sửa và cấu hình hồ sơ.' : 'Quyền hạn Giảng viên: Theo dõi danh sách học viên đăng ký lớp học phần phụ trách.'}
                    </p>
                </div>

                {isAdmin && (
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={handleAddNewCohort} style={{ padding: '8px 14px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>
                            ⏳ + Thêm Khóa Mới (Tăng theo năm)
                        </button>
                        <button onClick={() => { resetForm(); setShowModal(true); }} style={{ padding: '8px 14px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>
                            + Cấp Tài Khoản Sinh Viên
                        </button>
                    </div>
                )}
            </div>

            {/* 🔥 THANH BỘ LỌC ĐA CẤP PHÂN RÃ THEO ROLE */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', flexWrap: 'wrap' }}>

                {isAdmin ? (
                    /* LUỒNG HIỂN THỊ CASCADING DROPDOWN CỦA ADMIN */
                    <>
                        <div style={{ width: '200px' }}>
                            <label style={labelStyle}>⏳ Lọc theo Khóa học:</label>
                            <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các khóa</option>
                                {cohorts.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div style={{ width: '220px' }}>
                            <label style={labelStyle}>🏛️ Lọc theo Khoa:</label>
                            <select value={selectedDept} onChange={(e) => handleDeptChange(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các Khoa</option>
                                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                            </select>
                        </div>

                        <div style={{ width: '220px' }}>
                            <label style={labelStyle}>👥 Lọc theo Lớp hành chính:</label>
                            <select value={selectedClass} onChange={(e) => handleClassChange(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các Lớp</option>
                                {filteredClassOptions.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                            </select>
                        </div>
                    </>
                ) : (
                    /* 🔥 LUỒNG HIỂN THỊ ĐỘC QUYỀN CỦA GIẢNG VIÊN (TEACHER) */
                    <div style={{ width: '350px' }}>
                        <label style={labelStyle}>📖 Lựa chọn Lớp học phần đang đảm nhiệm:</label>
                        <select value={selectedCourseClass} onChange={(e) => handleTeacherClassChange(e.target.value)} style={selectStyle}>
                            {teacherClasses.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.code} — {c.subjectName} ({c.registeredStudents} SV)
                                </option>
                            ))}
                            {teacherClasses.length === 0 && <option value="">Chưa có lớp học phần phân công</option>}
                        </select>
                    </div>
                )}

                <div style={{ flex: '1', minWidth: '200px' }}>
                    <label style={labelStyle}>🔍 Tìm nhanh học viên (Mã số / Họ tên):</label>
                    <input
                        type="text"
                        placeholder="Nhập từ khóa cần tìm kiếm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none' }}
                    />
                </div>
            </div>

            {/* BẢNG RENDERING HIỂN THỊ DANH SÁCH */}
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Sinh Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Thuộc Niên Khóa</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa Chuyên Môn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp Hành Chính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái tài khoản</th>
                    {isAdmin && <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Hành Động Tác Vụ</th>}
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName} {student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)', fontWeight: 'bold' }}>{student.cohort || 'Khóa 1'}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'white', fontWeight: '500' }}>{student.departmentName || 'Chưa cập nhật'}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.className}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa tài khoản</span>}
                        </td>
                        {isAdmin && (
                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                <button onClick={() => handleOpenEdit(student)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', fontWeight: 'bold' }}>Sửa</button>
                                {student.active ? (
                                    <button onClick={() => handleDeleteStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                                ) : (
                                    <button onClick={() => handleEnableStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Mở Khóa</button>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
                {filteredStudents.length === 0 && (
                    <tr>
                        <td colSpan={isAdmin ? 8 : 7} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                            Không tìm thấy dữ liệu sinh viên nào phù hợp.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* MODAL BIỂU MẪU CỦA ADMIN (CHỈ GENERATE KHI LÀ ADMIN) */}
            {showModal && isAdmin && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>{isEditMode ? '📝 CẬP NHẬT HỒ SƠ SINH VIÊN' : '✍️ KHỞI TẠO HỒ SƠ SYSTEM'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Mã Sinh Viên:</label><input type="text" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} disabled={isEditMode} required style={inputStyle} /></div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Lớp Hành Chính:</label>
                                    <select value={classId} onChange={(e) => setClassId(e.target.value)} required style={inputStyle}>
                                        <option value="">-- Chọn lớp gợi ý --</option>
                                        {classList.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Phân vào Khóa học:</label>
                                    <select value={studentCohort} onChange={(e) => setStudentCohort(e.target.value)} required style={inputStyle}>
                                        {cohorts.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Họ Và Tên Đệm:</label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Tên Sinh Viên:</label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Số Điện Thoại:</label><input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy Bỏ</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>{isEditMode ? 'Lưu Thay Đổi' : 'Khởi Tạo & Cấp TK'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const labelStyle = { display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold', color: 'var(--text-cyan)' };
const selectStyle = { width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none', cursor: 'pointer' };
const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };

export default StudentPage;
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
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
    public ApiResponse<StudentResponse> createStudent(@RequestBody @Valid StudentCreationRequest request) {
        return new ApiResponse<>(1000, "Tạo hồ sơ sinh viên thành công!", studentService.createStudent(request));
    }

    @GetMapping
    public ApiResponse<List<StudentResponse>> getAllStudents(@RequestParam(required = false, defaultValue = "false") boolean includeInactive) {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents(includeInactive));
    }

    @GetMapping("/{studentId}")
    public ApiResponse<StudentResponse> getStudent(@PathVariable String studentId) { // 🔥 String
        return new ApiResponse<>(1000, "Lấy chi tiết sinh viên thành công!", studentService.getStudentById(studentId));
    }

    @PutMapping("/{studentId}")
    public ApiResponse<StudentResponse> updateStudent(@PathVariable String studentId, @RequestBody @Valid StudentUpdateRequest request) { // 🔥 String
        return new ApiResponse<>(1000, "Cập nhật thông tin sinh viên thành công!", studentService.updateStudent(studentId, request));
    }

    @DeleteMapping("/{studentId}")
    public ApiResponse<String> deleteStudent(@PathVariable String studentId) { // 🔥 String
        studentService.disableStudent(studentId);
        return new ApiResponse<>(1000, "Xóa hồ sơ sinh viên thành công!", "Hồ sơ sinh viên có ID " + studentId + " đã bị vô hiệu hóa.");
    }

    @PutMapping("/{studentId}/enable")
    public ApiResponse<String> enableStudent(@PathVariable String studentId) { // 🔥 String
        studentService.enableStudent(studentId);
        return new ApiResponse<>(1000, "Mở khóa hồ sơ sinh viên thành công!", "Hồ sơ và tài khoản đã được tái kích hoạt.");
    }
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
    @Column(name = "id", length = 20)
    private String id;

    @Column(name = "student_code", nullable = false, unique = true, length = 20)
    private String studentCode;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "phone_number", length = 15)
    private String phoneNumber;

    // 🔥 THÊM MỚI: Cột khóa học sinh viên lưu trữ thẳng xuống Database thật
    @Column(name = "cohort", length = 20)
    private String cohort;

    @Builder.Default
    @Column(name = "is_active", nullable = false)
    private boolean isActive = true;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "class_id", nullable = false)
    private Class studentClass;
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
    @Column(name = "id", length = 20) // Không còn dùng GenerationType.IDENTITY nữa
    private String id; // 🔥 Chuyển đổi thành String ID

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Builder.Default
    @Column(name = "is_active", nullable = false)
    private boolean isActive = true;

    @Builder.Default
    @Column(name = "is_first_login", nullable = false)
    private boolean isFirstLogin = true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/UserServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.UserMapper;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserResponse createUser(UserCreationRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        if (userRepository.existsByEmail(request.email())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        Role adminRole = roleRepository.findByName("ADMIN")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));

        long nextIndex = userRepository.countByIdStartingWith("AD_") + 1;
        String generatedId = String.format("AD_%02d", nextIndex);
        if (nextIndex == 1 && !userRepository.existsByUsername("admin")) {
            generatedId = "AD";
        }

        User user = User.builder()
                .id(generatedId)
                .username(request.username())
                .password(passwordEncoder.encode(request.password()))
                .email(request.email())
                .roles(Set.of(adminRole))
                .isActive(true)
                .isFirstLogin(true)
                .build();

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream().map(userMapper::toResponse).toList();
    }

    @Override
    public UserResponse getUserById(String id) {
        return userRepository.findById(id)
                .map(userMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    @Transactional
    public UserResponse updateUser(String id, UserUpdateRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        if (request.password() != null && !request.password().isBlank()) {
            user.setPassword(passwordEncoder.encode(request.password()));
            user.setFirstLogin(false);
        }
        if (request.email() != null && !request.email().isBlank()) {
            user.setEmail(request.email());
        }

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    @Transactional
    public UserResponse enableUser(String id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        user.setActive(true);
        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    @Transactional
    public UserResponse resetPassword(String id, String newPassword) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        String effectivePassword = (newPassword == null || newPassword.isBlank()) ? "password1234" : newPassword;
        user.setPassword(passwordEncoder.encode(effectivePassword));
        user.setFirstLogin(true);
        user.setActive(true);
        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    @Transactional
    public void disableUser(String id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        user.setActive(false);
        userRepository.save(user);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import java.util.List;

public interface StudentService {
    StudentResponse createStudent(StudentCreationRequest request);
    List<StudentResponse> getAllStudents(boolean includeInactive);

    // 🔥 ĐÃ SỬA: Chuyển toàn bộ tham số ID sang String
    StudentResponse getStudentById(String id);
    StudentResponse updateStudent(String id, StudentUpdateRequest request);
    void disableStudent(String id);
    void enableStudent(String id);
}
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
    show-sql: false # 🔥 ĐÃ SỬA: Chuyển từ true thành false để tắt log SQL mặc định
    properties:
      hibernate:
        show_sql: false # 🔥 THÊM MỚI: Khóa triệt để tính năng in log truy vấn
        format_sql: false # 🔥 ĐÃ SỬA: Chuyển từ true thành false để ngưng định dạng câu lệnh SQL
        dialect: org.hibernate.dialect.MySQLDialect
        jdbc:
          batch_size: 20
server:
  port: 8081

jwt:
  signer-key: "TranMinhDangDepZaiVaioSieuCapVipPro2005"

# 🔥 THÊM MỚI: Cấu hình dập tắt mức độ log của Hibernate chuẩn cú pháp YAML
logging:
  level:
    org:
      hibernate:
        SQL: OFF
        orm:
          jdbc:
            bind: OFF
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/ErrorCode.java">
package com.dangdepzaivaio.StudentManagement.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Loi he thong chua phan loai", HttpStatus.INTERNAL_SERVER_ERROR),
    VALIDATION_ERROR(1001, "Du lieu khong hop le", HttpStatus.BAD_REQUEST),
    USER_EXISTED(1002, "Tai khoan da ton tai", HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(1003, "Khong tim thay nguoi dung", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1004, "Dang nhap that bai hoac khong co quyen", HttpStatus.UNAUTHORIZED),
    STUDENT_CODE_EXISTED(1005, "Ma sinh vien da ton tai", HttpStatus.BAD_REQUEST),
    STUDENT_NOT_FOUND(1006, "Khong tim thay sinh vien", HttpStatus.NOT_FOUND),
    CLASS_NOT_FOUND(1007, "Khong tim thay lop hanh chinh", HttpStatus.NOT_FOUND),
    ROLE_NOT_FOUND(1008, "Khong tim thay vai tro", HttpStatus.NOT_FOUND),
    DEPARTMENT_NOT_FOUND(1009, "Khong tim thay khoa chuyen mon", HttpStatus.NOT_FOUND),
    TEACHER_CODE_EXISTED(1010, "Ma giang vien da ton tai", HttpStatus.BAD_REQUEST),
    TEACHER_NOT_FOUND(1011, "Khong tim thay giang vien", HttpStatus.NOT_FOUND),
    GRADE_EXISTED(1012, "Sinh vien da co ban ghi dang ky/diem cho lop hoc phan nay", HttpStatus.BAD_REQUEST),
    GRADE_NOT_FOUND(1013, "Khong tim thay ban ghi diem", HttpStatus.NOT_FOUND),
    COURSE_CLASS_NOT_FOUND(1014, "Khong tim thay lop hoc phan", HttpStatus.NOT_FOUND),
    COURSE_CLASS_EXISTED(1015, "Lop hoc phan da ton tai", HttpStatus.BAD_REQUEST),
    SUBJECT_NOT_FOUND(1016, "Khong tim thay mon hoc", HttpStatus.NOT_FOUND),
    COURSE_CLASS_HAS_GRADES(1017, "Khong the xoa vi lop hoc phan da co sinh vien dang ky hoac co diem", HttpStatus.BAD_REQUEST),
    CLASS_EXISTED(1018, "Lop hanh chinh da ton tai", HttpStatus.BAD_REQUEST),
    CLASS_HAS_STUDENTS(1019, "Khong the xoa vi lop hanh chinh dang co sinh vien", HttpStatus.BAD_REQUEST),
    DEPARTMENT_EXISTED(1020, "Khoa chuyen mon da ton tai", HttpStatus.BAD_REQUEST),
    DEPARTMENT_HAS_CLASSES(1021, "Khong the xoa vi khoa dang quan ly lop hanh chinh", HttpStatus.BAD_REQUEST),
    SUBJECT_EXISTED(1022, "Mon hoc da ton tai", HttpStatus.BAD_REQUEST),
    SUBJECT_HAS_CLASSES(1023, "Khong the xoa vi mon hoc dang co lop hoc phan", HttpStatus.BAD_REQUEST),
    ACCOUNT_LOCKED(1024, "Tai khoan dang bi khoa", HttpStatus.FORBIDDEN),
    REGISTRATION_PERIOD_CLOSED(1025, "Cong dang ky tin chi dang dong hoac da het han", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_CLOSED(1026, "Lop hoc phan chua duoc mo cho dang ky", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_FULL(1027, "Lop hoc phan da dat si so toi da", HttpStatus.BAD_REQUEST),
    GRADE_ALREADY_ENTERED(1028, "Khong the huy dang ky vi giang vien da nhap diem", HttpStatus.BAD_REQUEST),
    TEACHER_NOT_ASSIGNED_TO_CLASS(1029, "Giang vien chi duoc thao tac tren lop hoc phan duoc phan cong", HttpStatus.FORBIDDEN),
    STUDENT_NOT_ENROLLED(1030, "Sinh vien chua dang ky lop hoc phan nay", HttpStatus.BAD_REQUEST);

    private final int code;
    private final String message;
    private final HttpStatus statusCode;

    ErrorCode(int code, String message, HttpStatus statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "studentClass", ignore = true)
    @Mapping(target = "user", ignore = true)
    Student toEntity(StudentCreationRequest request);

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "classId", source = "studentClass.id") // 🔥 ÉP MAP: Lấy ID của Class đưa vào DTO
    @Mapping(target = "className", source = "studentClass.name")
    @Mapping(target = "active", source = "active")
    @Mapping(target = "departmentName", source = "studentClass.department.name")
    StudentResponse toResponse(Student student);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/StudentServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
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
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public StudentResponse createStudent(StudentCreationRequest request) {
        if (studentRepository.existsByStudentCode(request.studentCode())) {
            throw new AppException(ErrorCode.STUDENT_CODE_EXISTED);
        }

        Class studentClass = classRepository.findById(request.classId())
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        long nextIndex = userRepository.countByIdStartingWith("HS_") + 1;
        String generatedId = String.format("HS_%02d", nextIndex);

        User user = User.builder()
                .id(generatedId)
                .username(request.studentCode())
                .password(passwordEncoder.encode("password1234"))
                .email(request.studentCode().toLowerCase() + "@open.edu.vn")
                .isFirstLogin(true)
                .isActive(true)
                .build();

        Role studentRole = roleRepository.findByName("STUDENT")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(studentRole));

        // 🔥 BẢN VÁ: Hứng lấy Managed Object từ UserRepository trả về để chống lỗi crash liên kết dữ liệu
        User managedUser = userRepository.save(user);

        Student student = studentMapper.toEntity(request);
        student.setUser(managedUser);
        student.setStudentClass(studentClass);

        // 🔥 THÊM MỚI: Lưu thông tin niên khóa học thực tế trực tiếp vào Database SQL
        student.setCohort(request.cohort());
        student.setActive(true);

        return studentMapper.toResponse(studentRepository.save(student));
    }

    @Override
    public List<StudentResponse> getAllStudents(boolean includeInactive) {
        List<Student> students = includeInactive
                ? studentRepository.findAllStudentsWithJoinFetch()
                : studentRepository.findAllActiveStudentsWithJoinFetch();

        return students.stream().map(studentMapper::toResponse).toList();
    }

    @Override
    public StudentResponse getStudentById(String id) {
        return studentRepository.findById(id)
                .map(studentMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
    }

    @Override
    @Transactional
    public StudentResponse updateStudent(String id, StudentUpdateRequest request) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        if (request.classId() != null) {
            Class studentClass = classRepository.findById(request.classId())
                    .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));
            student.setStudentClass(studentClass);
        }

        student.setFirstName(request.firstName());
        student.setLastName(request.lastName());
        student.setDateOfBirth(request.dateOfBirth());
        student.setGender(request.gender());
        student.setPhoneNumber(request.phoneNumber());

        // 🔥 THÊM MỚI: Cập nhật sửa đổi Khóa học thực tế trong Database
        if (request.cohort() != null) {
            student.setCohort(request.cohort());
        }

        if (request.active() != null) {
            student.setActive(request.active());
            if (student.getUser() != null) {
                student.getUser().setActive(request.active());
            }
        }

        return studentMapper.toResponse(studentRepository.save(student));
    }

    @Override
    @Transactional
    public void disableStudent(String id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
        student.setActive(false);
        if (student.getUser() != null) student.getUser().setActive(false);
        studentRepository.save(student);
    }

    @Override
    @Transactional
    public void enableStudent(String id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
        student.setActive(true);
        if (student.getUser() != null) student.getUser().setActive(true);
        studentRepository.save(student);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/README.md">
# 🎓 Hệ thống Quản trị Đào tạo & Điểm số Sinh viên (Student Management System)

Dự án Hệ thống Quản lý Sinh viên toàn diện được thiết kế theo kiến trúc **Layered Architecture** sát với nghiệp vụ thực tế của các trường Đại học. Hệ thống áp dụng mô hình phân quyền chặt chẽ (RBAC) với 3 vai trò: Quản trị viên (ADMIN), Giảng viên (TEACHER) và Sinh viên (STUDENT).

## 🛠 Công nghệ sử dụng (Tech Stack)

### ⚙️ Backend
* **Ngôn ngữ:** Java 26
* **Framework:** Spring Boot 4.0.6
* **Cơ sở dữ liệu:** MySQL 8.0 & Spring Data JPA (Hibernate)
* **Bảo mật:** Spring Security & JSON Web Token (JWT) qua Nimbus JOSE
* **Tiện ích:** MapStruct 1.6.3 (Mapper), Lombok, Jakarta Validation

### 🎨 Frontend
* **Core:** React 19 & Vite
* **Routing:** React Router v7
* **HTTP Client:** Axios (Tích hợp tự động gắn Token)
* **Styling:** CSS Design Tokens thuần (Tối ưu Dark Theme bảo vệ mắt)

## ✨ Tính năng nổi bật (Key Features)
1. **Phân quyền 3 tầng (RBAC):**
  * **ADMIN:** Quản lý cơ cấu phòng ban, lớp học, môn học, khởi tạo và cấp tài khoản tự động. Không được phép can thiệp sửa điểm sinh viên.
  * **TEACHER:** Đặc quyền nhập điểm, sửa điểm cho các lớp học phần và tra cứu tổng quan bảng điểm toàn trường.
  * **STUDENT:** Chỉ được phép tra cứu kết quả học tập cá nhân của chính mình.
2. **Thuật toán GPA Tín chỉ:** Tự động tính điểm tổng kết (10% CC - 30% GK - 60% CK), quy đổi tự động sang Điểm chữ (A, B, C, D, F) và hệ 4 (4.0, 3.5...). Tính toán GPA bình quân gia quyền.
3. **Bảo mật Vòng đời Tài khoản:** Mọi tài khoản cấp mới có mật khẩu mặc định được băm BCrypt. Người dùng bị ép buộc đổi mật khẩu mới trong lần đăng nhập đầu tiên. Tích hợp UI ẩn/hiện mật khẩu thông minh.
4. **An toàn Dữ liệu:** Áp dụng Cascading Soft Delete (Xóa mềm), bảo vệ toàn vẹn khóa ngoại. Auto-map chính xác định danh tài khoản thông qua liên kết `user_id` chống sai lệch dữ liệu.

## 🚀 Hướng dẫn cài đặt & Chạy dự án (How to run)

### 1. Chuẩn bị Cơ sở dữ liệu
* Tạo một database trong MySQL có tên là: `student_management`.
* Thông tin kết nối mặc định (Sửa trong `src/main/resources/application.yaml`):
  * Username: `root`
  * Password: `dcnyuu`
* Import file `student_management.sql` đi kèm để có ngay bộ dữ liệu mẫu chuẩn hóa. (Lưu ý: Hệ thống đã tích hợp `DatabaseInitializer` tự động reset mật khẩu toàn bộ Database về chuẩn `password1234` khi khởi động Spring Boot để chống sai lệch chuỗi băm BCrypt).

### 2. Khởi chạy Backend (Spring Boot)
Di chuyển vào thư mục gốc của dự án và chạy:
\`\`\`bash
./mvnw spring-boot:run
\`\`\`
*Backend sẽ khởi chạy ở cổng: `http://localhost:8081`*

### 3. Khởi chạy Frontend (ReactJS)
Mở một Terminal mới, di chuyển vào thư mục giao diện và chạy:
\`\`\`bash
cd student-management-ui
npm install
npm run dev
\`\`\`
*Frontend sẽ khởi chạy ở cổng: `http://localhost:5173`*

## 🔑 Tài khoản thử nghiệm (Test Accounts)
Sau khi Backend khởi động, toàn bộ mật khẩu mặc định là: **`password1234`**.

* **ADMIN:** Tên đăng nhập: `admin`
* **TEACHER:** Tên đăng nhập: `GV2026_01` (đến `GV2026_05`)
* **STUDENT:** Tên đăng nhập: `B21CNPM001` (đến `B21CNPM005`)

---

## ✅ Tiến độ Dự án (Project Progress)

### ☑️ Giai đoạn 1 đến 6: Hoàn thiện Kiến trúc & Nghiệp vụ Backend (ĐÃ HOÀN THÀNH)
* Xây dựng trọn bộ API CRUD liên kết lồng nhau 8 thực thể nền tảng.
* Xử lý triệt để truy vấn N+1 bằng `JOIN FETCH`. Tích hợp Cascading Soft Delete.
* Cấu hình Spring Security, JWT Auth, CORS toàn cục và Auto-Reset Password cốt lõi.

### ☑️ Giai đoạn 7: Thiết lập và Phát triển Phân hệ UI Client (ĐÃ HOÀN THÀNH)
* [x] Khởi tạo dự án Single Page Application (SPA) bằng công nghệ React 19 + Vite.
* [x] Thiết lập cấu hình **Axios Client tập trung** xử lý gắn Token ngầm và bóc tách `ApiResponse`.
* [x] Xây dựng màn hình Đăng nhập (`LoginPage.jsx`) tích hợp tính năng ẩn/hiện mật khẩu (👁️) và luồng ép đổi mật khẩu lần đầu.
* [x] Phát triển hệ thống View dữ liệu phân cấp nghiêm ngặt: Admin quản lý tài khoản, Teacher nhập điểm, Student xem điểm cá nhân.
* [x] Tích hợp tính năng Tra cứu điểm toàn trường (System-wide Grades) chuyên nghiệp dành riêng cho Ban giáo vụ và Giảng viên.

---

## 🚀 Lộ trình Triển khai Tiếp theo (Roadmap)

### 🔲 Giai đoạn 8: Nâng cấp Nghiệp vụ Nâng cao
* [ ] Tích hợp tính năng Xuất/Nhập danh sách sinh viên và bảng điểm bằng file Excel (Apache POI).
* [ ] Thiết kế Dashboard vẽ biểu đồ thống kê học lực sinh viên trực quan bằng Chart.js hoặc Recharts.
* [ ] Tính năng Quên mật khẩu qua Email (Java Mail Sender).

### 🔲 Giai đoạn 9: Đóng gói và Triển khai hệ thống (DevOps)
* [ ] Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java (Multi-stage build).
* [ ] Viết file `docker-compose.yml` để thiết lập mạng ảo vận hành đồng bộ Spring Boot và MySQL.
* [ ] Triển khai (Deploy) Backend lên Cloud (Render/Railway) và Frontend lên Vercel.

---

## 🔗 Quy trình Quản lý Mã nguồn (Git Workflow)
* **`main`**: Nhánh Production lưu trữ các phiên bản mã nguồn đã đạt trạng thái ổn định tuyệt đối.
* **`develop`**: Nhánh tích hợp (nơi gom các tính năng mới hoàn thiện để kiểm thử).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển các chức năng riêng lẻ tách biệt.

---

### 📜 Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, kết nối MySQL và khởi dựng thành công 8 thực thể nền tảng. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản `@Transactional` và cơ chế Xóa mềm. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành trọn gói Nghiệp vụ Môn học, Lớp học phần, phân hệ Điểm số, thuật toán quy đổi GPA tín chỉ và chống lỗi N+1. |
| 08/06/2026 | `develop` | **Cập nhật** | Hoàn thiện toàn phân hệ CRUD danh mục hành chính Khoa/Viện và Lớp hành chính. |
| 09/06/2026 | `develop` | **Cập nhật** | Cấu hình CORS toàn cục, làm giàu Payload phản hồi Login, vá triệt để lỗ hổng `NullPointerException`. |
| 10/06/2026 | `develop` | **Push Code**| Vá lỗi định danh `studentId/teacherId`, tước quyền can thiệp điểm của Admin giao cho Teacher. Hoàn thiện UI tra cứu điểm toàn trường, nút ẩn/hiện mật khẩu và kích hoạt Auto-Reset Password. |

## 📝 Hướng dẫn cập nhật tài liệu & Push Code (Cheatsheet)

### 1. Quy tắc cấu trúc cập nhật README (Bắt buộc tuân thủ)
Để đảm bảo tệp tài liệu luôn ngăn nắp và không bị mất các thông tin cốt lõi khi nâng cấp hệ thống, quy trình cập nhật tệp `README.md` phải tuân theo nguyên tắc phân tách nội dung sau:

* **🚫 GIỮ NGUYÊN T TUYỆT ĐỐI (Không chỉnh sửa cấu trúc gốc):**
  * Tiêu đề dự án và mô tả tổng quan.
  * Danh mục công nghệ sử dụng (**Tech Stack** - Backend & Frontend).
  * Danh sách tính năng nổi bật (**Key Features**).
  * Hướng dẫn cài đặt & Khởi chạy dự án (**How to run**).
  * Thông tin tài khoản thử nghiệm (**Test Accounts**).
* **🔄 CHỈ SỬA ĐỔI / CẬP NHẬT 3 PHẦN ĐỘNG SAU:**
  1.  **Tiến độ Dự án (Project Progress):** Khi một tính năng ở mục Lộ trình được hoàn thiện, chuyển tính năng đó lên mục này và đánh dấu tích chọn `- [x]`.
  2.  **Lộ trình Tiếp theo (Roadmap):** Bổ sung hoặc loại bỏ các đầu việc, tính năng nâng cao dự kiến phát triển tiếp theo dưới dạng ô trống `- [ ]`.
  3.  **Nhật ký hành trình (Project Changelog):** Mỗi khi push code thành công, bắt buộc thêm 1 dòng mới vào cuối bảng theo cấu trúc: `| Ngày/Tháng/Năm | Nhánh | Thao tác | Mô tả chi tiết các file đã sửa và tính năng vừa vá |`.
</file>

</files>
